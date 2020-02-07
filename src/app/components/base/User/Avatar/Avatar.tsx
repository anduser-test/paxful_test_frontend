import * as React from 'react';

import './avatar.scss';

interface Props {
  imageSrc: string;
  className?: string;
}

const Avatar = ({ imageSrc, className }: Props) => (
  <img className={`user-avatar ${className}`} src={imageSrc} />
);

export { Avatar };
