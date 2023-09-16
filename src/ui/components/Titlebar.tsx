import classNames from 'classnames';
import React, { useState } from 'react';

import { MenuChannels } from 'src/channels/menuChannels';
import { useRendererListener } from 'src/ui/hooks';
import { WindowState } from 'src/windowState';

interface ITitleBarProps {
  children: (props: WindowState) => React.ReactNode;
}

const handleDoubleClick = () => {
  electron.ipcRenderer.invoke(MenuChannels.WINDOW_TOGGLE_MAXIMIZE);
};

export default function Titlebar({ children }: ITitleBarProps) {
  const [windowState, setWindowState] = useState<WindowState>('normal');

  useRendererListener('window-state-changed', (_, windowState: WindowState) => setWindowState(windowState));

  return (
    <div onDoubleClick={handleDoubleClick} className={classNames('window-titlebar')}>
      {children(windowState)}
    </div>
  );
}
