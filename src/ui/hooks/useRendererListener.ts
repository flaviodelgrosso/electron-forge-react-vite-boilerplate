import { useEffect } from 'react';

import type { RendererListener } from 'src/preload';

export const useRendererListener = (channel: string, listener: RendererListener) => {
  useEffect(() => {
    electron.ipcRenderer.on(channel, listener);
    return () => {
      electron.ipcRenderer.removeListener(channel, listener);
    };
  }, [channel, listener]);
};
