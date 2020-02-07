import * as React from 'react';

import './payStatus.scss';
import { PAYMENT_STATUSES } from '@app/constants/Pay/pay.constants';

interface Props {
  status: number;
}

const PayStatus = ({ status }: Props) => (
  <span
    className={`payment-status text-bold payment-status__${
      status ? 'paid' : 'not-paid'
    }`}
  >
    {PAYMENT_STATUSES[status]}
  </span>
);

export { PayStatus };
