import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './link.scss';

interface Props {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Link = ({ to, children, onClick }: Props) => (
  <NavLink to={to} className="paxful-link" onClick={onClick}>
    {children}
  </NavLink>
);

export { Link };
