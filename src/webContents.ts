import { WebContents } from 'electron';

import { MenuChannels } from 'src/channels/menuChannels';

export type ClickHandler = (
  menuItem: Electron.MenuItem,
  browserWindow: Electron.BrowserWindow | undefined,
  event: Electron.KeyboardEvent,
) => void;

export function emitEvent(eventName: string, ...args: any[]): ClickHandler {
  return (_, focusedWindow) => {
    const mainWindow = focusedWindow ?? Electron.BrowserWindow.getAllWindows()[0];
    if (mainWindow !== undefined) {
      sendToRenderer(mainWindow.webContents, MenuChannels.MENU_EVENT, eventName, ...args);
    }
  };
}

export function sendToRenderer(webContents: WebContents, channel: string, ...args: any[]): void {
  if (webContents.isDestroyed()) {
    const msg = `failed to send on ${channel}, webContents was destroyed`;
    if (__DEV__) {
      throw new Error(msg);
    }
    console.error(msg);
  } else {
    webContents.send(channel, ...args);
  }
}
