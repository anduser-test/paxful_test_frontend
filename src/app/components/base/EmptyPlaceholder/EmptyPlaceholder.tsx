import * as React from 'react';

import './emptyPlaceholder.scss';

const EmptyPlaceholder: React.FC = ({ children }) => (
  <div className="empty-placeholder">{children}</div>
);

export { EmptyPlaceholder };
