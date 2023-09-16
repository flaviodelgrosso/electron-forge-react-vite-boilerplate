import classNames from 'classnames';
import React from 'react';

interface IControlButtonProps {
  name: string;
  onClick: React.MouseEventHandler<HTMLDivElement> | React.KeyboardEventHandler<HTMLDivElement>;
  path: string;
}

const ControlButton: React.FC<IControlButtonProps> = ({ name, onClick, path }) => {
  const className = classNames('control', name);
  const title = name[0].toUpperCase() + name.substring(1);

  return (
    <div
      role='button'
      aria-label={name}
      className={className}
      onClick={onClick as React.MouseEventHandler<HTMLDivElement>}
      onKeyDown={onClick as React.KeyboardEventHandler<HTMLDivElement>}
      title={title}
      tabIndex={0}
    >
      <svg aria-hidden='true' version='1.1' width='10' height='10'>
        <path fill='currentColor' d={path} />
      </svg>
    </div>
  );
};

export default ControlButton;
