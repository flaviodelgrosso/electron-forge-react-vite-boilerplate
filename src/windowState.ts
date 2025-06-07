import { sendToRenderer } from '@/webContents';

export type WindowState = 'minimized' | 'normal' | 'maximized' | 'full-screen' | 'hidden';

export function getWindowState(window: Electron.BrowserWindow): WindowState {
  if (window.isFullScreen()) {
    return 'full-screen';
  }
  if (window.isMaximized()) {
    return 'maximized';
  }
  if (window.isMinimized()) {
    return 'minimized';
  }
  if (!window.isVisible()) {
    return 'hidden';
  }
  return 'normal';
}

/**
 * Registers event handlers for all window state transition events and
 * forwards those to the renderer process for a given window.
 */
export function registerWindowStateChangedEvents(window: Electron.BrowserWindow) {
  window.on('enter-full-screen', () => sendWindowStateEvent(window, 'full-screen'));

  // So this is a bit of a hack. If we call window.isFullScreen directly after
  // receiving the leave-full-screen event it'll return true which isn't what
  // we're after. So we'll say that we're transitioning to 'normal' even though
  // we might be maximized. This works because electron will emit a 'maximized'
  // event after 'leave-full-screen' if the state prior to full-screen was maximized.
  window.on('leave-full-screen', () => sendWindowStateEvent(window, 'normal'));

  window.on('maximize', () => sendWindowStateEvent(window, 'maximized'));
  window.on('minimize', () => sendWindowStateEvent(window, 'minimized'));
  window.on('unmaximize', () => sendWindowStateEvent(window, 'normal'));
  window.on('restore', () => sendWindowStateEvent(window, 'normal'));
  window.on('hide', () => sendWindowStateEvent(window, 'hidden'));
  window.on('show', () => {
    // because the app can be maximized before being closed - which will restore it
    // maximized on the next launch - this function should inspect the current state
    // rather than always assume it is a 'normal' launch
    sendWindowStateEvent(window, getWindowState(window));
  });
}

function sendWindowStateEvent(window: Electron.BrowserWindow, state: WindowState) {
  sendToRenderer(window.webContents, 'window-state-changed', state);
}
