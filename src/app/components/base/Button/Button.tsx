import * as React from 'react';

import './button.scss';
import { BUTTON_CLASSES } from '@app/constants/Button/button.constants';

interface Props {
  type: string;
  children: React.ReactNode;
  action: 'submit' | 'button';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ type, children, onClick, action, disabled }: Props) => (
  <button
    className={BUTTON_CLASSES[type]}
    onClick={onClick}
    type={action}
    disabled={disabled}
  >
    {children}
  </button>
);

export { Button };
