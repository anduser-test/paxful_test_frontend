import * as React from 'react';

import './button.scss';
import { BUTTON_TYPES } from '@app/constants/Button/button.constants';

interface Props {
  type: BUTTON_TYPES;
  action: 'submit' | 'button';
  disabled?: boolean;
  onClick?: () => void;
}

const BUTTON_CLASSES = {
  [BUTTON_TYPES.ROUNDED_BUTTON_PRIMARY]:
    'button button-rounded button-rounded__primary',
  [BUTTON_TYPES.TRANSPARENT_BUTTON]: 'button button-transparent',
  [BUTTON_TYPES.ROUNDED_BUTTON_BIG_PRIMARY]:
    'button button-rounded__big-primary',
};

const Button: React.FC<Props> = ({
  type,
  children,
  onClick,
  action,
  disabled,
}) => (
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
