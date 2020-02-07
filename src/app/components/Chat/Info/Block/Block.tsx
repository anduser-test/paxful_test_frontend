import * as React from 'react';

import './block.scss';

interface Props {
  children: React.ReactNode;
  side: 'left' | 'right';
}

const Block = ({ children, side }: Props) => (
  <div className={`chat-info-block chat-info-block-${side}`}>{children}</div>
);

export { Block };
