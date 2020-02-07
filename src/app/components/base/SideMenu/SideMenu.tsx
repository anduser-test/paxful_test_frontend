import * as React from 'react';
import { slide as Menu, Props } from 'react-burger-menu';

import './sideMenu.scss';

const SideMenu: React.FC<Props> = (props) => (
  <Menu {...props}>{props.children}</Menu>
);

export { SideMenu };
