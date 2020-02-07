import * as React from 'react';

import './raiting.scss';
import { Raiting } from '@app/types/pay.types';

interface Props {
  raiting: Raiting;
}

const Raiting = ({ raiting }: Props) => (
  <span className="raiting">
    <span className="raiting__positive">+{raiting.positiveDeals}</span> /
    <span className="raiting__negative"> -{raiting.negativeDeals}</span>
  </span>
);

export { Raiting };
