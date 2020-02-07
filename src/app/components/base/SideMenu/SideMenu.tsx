import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './sideMenu.scss';

const SideMenu = (props: any) => <Menu {...props}>{props.children}</Menu>;

export { SideMenu };
