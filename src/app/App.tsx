import { ThemeProvider } from '@/app/components/theme-provider';
import Titlebar from '@/app/components/titlebar';
import { useRendererListener } from '@/app/hooks';
import { LandingScreen } from '@/app/screens/landing';
import { MenuChannels } from '@/channels/menuChannels';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

const onMenuEvent = (_: Electron.IpcRendererEvent, channel: string, ...args: unknown[]) => {
  electron.ipcRenderer.invoke(channel, args);
};

export default function App() {
  useRendererListener(MenuChannels.MENU_EVENT, onMenuEvent);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Titlebar />
        <Routes>
          <Route path="/" Component={LandingScreen} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
