import * as React from 'react';

import './message.scss';
import { Message } from '@app/types/chats.types';
import { MESSAGE_FROM_CLASSES } from '@app/constants/Messages/messages.constants';
import { USER_ROLES, INITIAL_USER } from '@app/constants/User/user.constants';
import { User } from '@app/types/user.types';
import { Avatar } from '@app/components/base/User/Avatar/Avatar';

interface Props {
  message: Message;
  user: User;
}

const Message = ({ message, user }: Props) => (
  <div className={`message ${MESSAGE_FROM_CLASSES[message.from]}`}>
    <div className="message-sender">
      <Avatar
        imageSrc={
          message.from === USER_ROLES.SELLER
            ? INITIAL_USER.avatarUrl
            : user.avatarUrl
        }
        className="message-sender-avatar user-avatar"
      />
    </div>
    <div className="message-text">{message.text}</div>
  </div>
);

export { Message };
