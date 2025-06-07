import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import Menu from '@/app/components/Menu';
import Titlebar from '@/app/components/Titlebar';
import WindowControls from '@/app/components/WindowControls';
import { ThemeProvider } from '@/app/components/theme-provider';
import { useRendererListener } from '@/app/hooks';
import { LandingScreen } from '@/app/screens/Landing';
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
