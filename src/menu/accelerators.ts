export function getPlatformAcceleratorSymbol(modifier: string) {
  switch (modifier.toLowerCase()) {
    case 'cmdorctrl':
    case 'commandorcontrol':
      return __DARWIN__ ? '⌘' : 'Ctrl';

    case 'ctrl':
    case 'control':
      return __DARWIN__ ? '⌃' : 'Ctrl';

    case 'shift':
      return __DARWIN__ ? '⇧' : 'Shift';
    case 'alt':
      return __DARWIN__ ? '⌥' : 'Alt';

    // Mac only
    case 'cmd':
    case 'command':
      return '⌘';
    case 'option':
      return '⌥';

    // Special case space because no one would be able to see it
    case ' ':
      return 'Space';
  }

  // Not a known modifier, likely a normal key
  return modifier;
}

export function fixAcceleratorText(accelerator: Electron.Accelerator) {
  return accelerator
    .split('+')
    .map(getPlatformAcceleratorSymbol)
    .join(__DARWIN__ ? '' : '+');
}
