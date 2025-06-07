import classNames from 'classnames';
import type React from 'react';
import { useState } from 'react';

import { useRendererListener } from '@/app/hooks';
import { MenuChannels } from '@/channels/menuChannels';
import type { WindowState } from '@/windowState';

interface ITitleBarProps {
  children: (props: WindowState) => React.ReactNode;
}

const handleDoubleClick = () => {
  electron.ipcRenderer.invoke(MenuChannels.WINDOW_TOGGLE_MAXIMIZE);
};

export default function Titlebar({ children }: ITitleBarProps) {
  const [windowState, setWindowState] = useState<WindowState>('normal');

  useRendererListener('window-state-changed', (_, windowState: WindowState) =>
    setWindowState(windowState),
  );

  // Hide titlebar in full screen mode on macOS
  if (windowState === 'full-screen' && __DARWIN__) {
    return null;
  }

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={classNames('window-titlebar', {
        darwin: __DARWIN__,
      })}
    >
      {children(windowState)}
    </div>
  );
}
