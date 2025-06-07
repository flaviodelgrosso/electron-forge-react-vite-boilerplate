import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import Menu from '@/app/components/menu';
import { ThemeProvider } from '@/app/components/theme-provider';
import Titlebar from '@/app/components/titlebar';
import WindowControls from '@/app/components/window-controls';
import { useRendererListener } from '@/app/hooks';
import { LandingScreen } from '@/app/screens/landing';
import { MenuChannels } from '@/channels/menuChannels';

const onMenuEvent = (_: Electron.IpcRendererEvent, channel: string, ...args: unknown[]) => {
  electron.ipcRenderer.invoke(channel, args);
};

export default function App() {
  useRendererListener(MenuChannels.MENU_EVENT, onMenuEvent);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Titlebar>
          {(windowState) => (
            <>
              {__WIN32__ && (
                <>
                  <Menu />
                  <WindowControls windowState={windowState} />
                </>
              )}
              {__DARWIN__ && (
                <div className="flex-1 h-8 flex items-center justify-center">
                  <span className="text-sm text-foreground/60">{__APP_NAME__}</span>
                </div>
              )}
            </>
          )}
        </Titlebar>
        <Routes>
          <Route path="/" Component={LandingScreen} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
