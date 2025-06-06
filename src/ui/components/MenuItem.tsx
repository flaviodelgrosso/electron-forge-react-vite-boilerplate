import type React from 'react';
import { forwardRef } from 'react';

interface IMenuItemProps {
  label: string;
  submenu?: Electron.MenuItemConstructorOptions[];
  onMenuClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMenuMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMenuMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PopupItem = forwardRef<HTMLDivElement, Partial<IMenuItemProps>>(({ submenu }, ref) => (
  <div className="menu-popup" ref={ref}>
    {submenu?.map((menuItem, menuItemIndex) => {
      if (menuItem.type === 'separator') {
        return (
          <div
            key={`menu_${menuItemIndex}_popup_item_${menuItemIndex + 1}`}
            className="popup-item-separator"
          />
        );
      }

      return (
        <button
          key={`menu_${menuItemIndex}_popup_item_${menuItemIndex + 1}`}
          className="menu-popup-item"
          onMouseDown={(e) => e.preventDefault()}
          onKeyDown={(e) => e.preventDefault()}
          type="button"
          tabIndex={0}
        >
          <div className="popup-item-name">{menuItem.label}</div>
          <div className="popup-item-shortcut">{menuItem.accelerator}</div>
        </button>
      );
    })}
  </div>
));

PopupItem.displayName = 'PopupItem';

export const MenuItem: React.FC<IMenuItemProps> = ({
  label,
  submenu,
  onMenuClick,
  onMenuMouseDown,
  onMenuMouseEnter,
}) => (
  <div className="menu-item">
    <button
      className="menu-title"
      onClick={onMenuClick}
      onMouseEnter={onMenuMouseEnter}
      onMouseDown={onMenuMouseDown}
      onKeyDown={(e) => e.preventDefault()}
      type="button"
      tabIndex={0}
    >
      {label}
    </button>
    <PopupItem {...{ submenu }} />
  </div>
);
