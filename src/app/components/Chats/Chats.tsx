import * as React from 'react';

import './chats.scss';
import { ChatPreview } from '@app/components/ChatPreview/ChatPreview';
import { Chat as ChatType } from '@app/types/chats.types';
import { Link } from '@app/components/base/Link/Link';
import { User } from '@app/types/user.types';
import { EmptyPlaceholder } from '@app/components/base/EmptyPlaceholder/EmptyPlaceholder';
import { SideMenu } from '@app/components/base/SideMenu/SideMenu';
import { Toggled } from '@app/components/base/Toggled/Toggled';
import MenuIcon from '@assets/img/open-menu.svg';
import CloseIcon from '@assets/img/close.svg';

interface Props {
  chats: ChatType[];
  currentUser: User;
  activeChat: string;
  bitcoinFloat: number;
  markChatAsRead: (chatId: string, role: string) => void;
}

const Chats = ({
  chats,
  currentUser,
  activeChat,
  markChatAsRead,
  bitcoinFloat,
}: Props) => (
  <>
    <div className="chats-container">
      {chats?.length ? (
        chats.map((chat) => (
          <Link
            to={`${chat.id}`}
            key={chat.id}
            onClick={() => markChatAsRead(chat.id, currentUser.role)}
          >
            <ChatPreview
              chat={chat}
              currentUser={currentUser}
              isActive={chat.id === activeChat}
              bitcoinFloat={bitcoinFloat}
            />
          </Link>
        ))
      ) : (
        <EmptyPlaceholder>No chats available</EmptyPlaceholder>
      )}
    </div>

    <div className="chats-container__mobile left-menu">
      <Toggled initial={false}>
        {(params) => (
          <>
            <div
              onClick={params.setPositiveStatus}
              className="bm-burger-button"
            >
              <MenuIcon />
            </div>
            <SideMenu
              isOpen={params.isToggled}
              customBurgerIcon={false}
              customCrossIcon={false}
            >
              <div
                onClick={params.setNegativeStatus}
                className="bm-cross-button"
              >
                <CloseIcon height={10} width={10} />
              </div>
              {chats && chats.length ? (
                chats.map((chat) => (
                  <Link
                    to={`${chat.id}`}
                    key={chat.id}
                    onClick={() => {
                      markChatAsRead(chat.id, currentUser.role);
                      params.setNegativeStatus();
                    }}
                  >
                    <ChatPreview
                      chat={chat}
                      currentUser={currentUser}
                      isActive={chat.id === activeChat}
                      bitcoinFloat={bitcoinFloat}
                    />
                  </Link>
                ))
              ) : (
                <EmptyPlaceholder>No chats available</EmptyPlaceholder>
              )}
            </SideMenu>
          </>
        )}
      </Toggled>
    </div>
  </>
);

export { Chats };
