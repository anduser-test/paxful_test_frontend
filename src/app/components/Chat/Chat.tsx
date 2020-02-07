import * as React from 'react';

import './chat.scss';
import { Chat } from '@app/types/chats.types';
import { Message } from '@app/components/Message/Message';
import { PAY_METHODS } from '@app/constants/Pay/pay.constants';
import TrashCan from '@assets/img/trash.svg';
import { Button } from '@app/components/base/Button/Button';
import { BUTTON_TYPES } from '@app/constants/Button/button.constants';
import { Raiting } from '../base/User/Raiting/Raiting';
import { SendMessageForm } from '@app/containers/NewMessage/NewMessage.container';
import { useScrollToBottom } from '@app/utils/chat.helpers';

interface Props {
  chat: Chat;
  deleteChat: (chatId: string) => void;
}

const Chat = ({ chat, deleteChat }: Props) => {
  const messagesEndRef = React.useRef(null);
  const deleteChatEmmiter = React.useCallback(() => {
    deleteChat(chat.id);
  }, [chat.id]);

  useScrollToBottom(messagesEndRef, chat.messages);

  return (
    <div className="chat-container">
      <div className="chat-functional">
        <Button
          type={BUTTON_TYPES.ROUNDED_BUTTON_PRIMARY}
          onClick={deleteChatEmmiter}
          action="button"
        >
          <TrashCan fill="#fff" />
        </Button>

        <div className="chat-functional-data">
          <span className="chat-functional-data-pay-method text-bold">
            {PAY_METHODS[chat.payMethod]}
          </span>
          <span className="chat-functional-data-raiting text-bold">
            <span>{chat.user.nickName} </span>
            <Raiting raiting={chat.user.raiting} />
          </span>
        </div>
      </div>

      <div className="chat-messages">
        {chat.messages?.map((message, index) => (
          <Message message={message} key={index} user={chat.user} />
        ))}
        <span ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <SendMessageForm />
      </div>
    </div>
  );
};

export { Chat };
