import * as React from 'react';

import './block.scss';

interface Props {
  side: 'left' | 'right';
}

const Block: React.FC<Props> = ({ children, side }) => (
  <div className={`chat-info-block chat-info-block-${side}`}>{children}</div>
);

export { Block };
