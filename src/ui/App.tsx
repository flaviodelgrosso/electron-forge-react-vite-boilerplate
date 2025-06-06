import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { MenuChannels } from 'src/channels/menuChannels';
import { useRendererListener, useThemeListener } from 'src/ui/hooks';
import Menu from 'ui/components/Menu';
import Titlebar from 'ui/components/Titlebar';
import WindowControls from 'ui/components/WindowControls';
import Home from 'ui/screens/Home';

const onMenuEvent = (_: Electron.IpcRendererEvent, channel: string, ...args: unknown[]) => {
  electron.ipcRenderer.invoke(channel, args);
};

export default function App() {
  useRendererListener(MenuChannels.MENU_EVENT, onMenuEvent);

  useThemeListener();

  return (
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
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}
