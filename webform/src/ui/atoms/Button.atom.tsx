import React from 'react';
import { ButtonProps } from '../../types';

const ButtonAtom: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  disabled = false,
  children,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button-atom ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonAtom;
