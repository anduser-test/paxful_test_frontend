import * as React from 'react';

import './emptyPlaceholder.scss';

interface Props {
  children: React.ReactNode;
}

const EmptyPlaceholder = ({ children }: Props) => (
  <div className="empty-placeholder">{children}</div>
);

export { EmptyPlaceholder };
