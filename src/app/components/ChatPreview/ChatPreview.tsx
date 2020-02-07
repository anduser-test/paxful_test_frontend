import * as React from 'react';
import * as cn from 'classnames';

import './chatPreview.scss';
import { Chat } from '@app/types/chats.types';
import { PAY_METHODS } from '@app/constants/Pay/pay.constants';
import { User } from '@app/types/user.types';
import { Avatar } from '@app/components/base/User/Avatar/Avatar';
import { PayStatus } from '../base/PayStatus/PayStatus';

interface Props {
  chat: Chat;
  currentUser: User;
  isActive: boolean;
  bitcoinFloat: number;
}

const ChatPreview = ({ chat, currentUser, isActive, bitcoinFloat }: Props) => (
  <div className={cn('chat-preview', { 'chat-preview__active': isActive })}>
    <div className="chat-preview-info">
      <span className="chat-preview-info-status">
        <span
          className={`chat-preview-indicator ${chat.isNewMessages &&
            'chat-preview-indicator__unread'}`}
        />{' '}
        {chat.user.nickName} is buying
      </span>
      <span className="chat-preview-pay-method">
        {PAY_METHODS[chat.payMethod]}
      </span>
      <span className="chat-preview-amount">
        {bitcoinFloat &&
          `${chat.amount} USD (${chat.amount / bitcoinFloat}) BTC`}
      </span>
    </div>

    <div className="chat-preview-user">
      <Avatar
        className="chat-preview-user-avatar user-avatar"
        imageSrc={currentUser.avatarUrl}
      />
      <PayStatus status={chat.status} />
    </div>
  </div>
);

export { ChatPreview };
