import { createSelector } from 'reselect';

import { RootStore } from '../combined';

const getActiveChatId = (state: RootStore) => state.chats.activeChat;
const getChats = (state: RootStore) => state.chats.data;

export const getChat = createSelector(
  [getActiveChatId, getChats],
  (chatId, chats) => {
    if (chatId) {
      return chats.find((chat) => chat.id === chatId);
    }

    return null;
  },
);
