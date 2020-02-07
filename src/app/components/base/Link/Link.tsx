import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './link.scss';

interface Props {
  to: string;
  onClick?: () => void;
}

const Link: React.FC<Props> = ({ to, children, onClick }) => (
  <NavLink to={to} className="paxful-link" onClick={onClick}>
    {children}
  </NavLink>
);

export { Link };
