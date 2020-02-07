import * as React from 'react';

import './info.scss';
import { Chat as ChatType } from '@app/types/chats.types';
import { Block } from './Block/Block';
import { Avatar } from '@app/components/base/User/Avatar/Avatar';
import { Raiting } from '@app/components/base/User/Raiting/Raiting';
import { PayStatus } from '@app/components/base/PayStatus/PayStatus';
import { Button } from '@app/components/base/Button/Button';
import { BUTTON_TYPES } from '@app/constants/Button/button.constants';

interface Props {
  chat: ChatType;
  differentUserRole: string;
  bitcoinFloat: number;
  markAsPaid: () => void;
  changeUserType: () => void;
}

const Info = ({
  chat,
  markAsPaid,
  changeUserType,
  differentUserRole,
  bitcoinFloat,
}: Props) => (
  <>
    <div className="chat-info-container__main">
      <div className="chat-info-header">
        <span>
          You are traiding with{' '}
          <span className="text-bold">{chat.user.nickName}</span>
        </span>
      </div>

      <Button
        type={BUTTON_TYPES.ROUNDED_BUTTON_BIG_PRIMARY}
        action="button"
        disabled={!!chat.status}
        onClick={markAsPaid}
      >
        Release bitcoins
      </Button>

      <div className="chat-info-data text-bold">
        <Block side="left">
          <Avatar imageSrc={chat.user.avatarUrl} />
          <Raiting raiting={chat.user.raiting} />
        </Block>

        <Block side="right">
          <span># Of Trades</span>
          <span>4</span>
        </Block>

        <Block side="left">
          <span>Trade status</span>
          <PayStatus status={chat.status} />
        </Block>

        <Block side="right">
          <span>Trade hash</span>
          <span>25252rwf3</span>
        </Block>

        <Block side="left">
          <span>Amount USD</span>
          <span>{chat.amount}</span>
        </Block>

        <Block side="right">
          <span>Amount BTC</span>
          <span className="wrap-word">
            {bitcoinFloat && chat.amount / bitcoinFloat}
          </span>
        </Block>
      </div>
    </div>

    <Button
      type={BUTTON_TYPES.ROUNDED_BUTTON_BIG_PRIMARY}
      action="button"
      onClick={changeUserType}
    >
      Chage user type to {differentUserRole}
    </Button>
  </>
);

export { Info };
