import { useEffect } from 'react';

import { RendererListener } from 'src/preload';

export const useRendererListener = (channel: string, listener: RendererListener) => {
  useEffect(() => {
    electron.ipcRenderer.on(channel, listener);
    return () => {
      electron.ipcRenderer.removeListener(channel, listener);
    };
  }, []);
};
