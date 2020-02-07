import { createReducer } from '@app/redux/reducers/createReducer';
import { initialState } from '@app/redux/states/chats';
import { CHATS_ACTIONS } from '@app/redux/actionTypes/chats';
import { ChatsState } from '@app/types/chats.types';

export const chats = createReducer(initialState, {
  [CHATS_ACTIONS.SET_ACTIVE_CHAT]: (
    state: ChatsState,
    chatId: string,
  ): ChatsState => ({
    ...state,
    activeChat: chatId,
  }),

  [CHATS_ACTIONS.DELETE_CHAT]: (
    state: ChatsState,
    chatId: string,
  ): ChatsState => ({
    ...state,
    data: state.data.filter((chat) => chat.id !== chatId),
  }),

  [CHATS_ACTIONS.SEND_MESSAGE]: (
    state: ChatsState,
    payload: {
      chatId: string;
      message: string;
      role: string;
    },
  ): ChatsState => ({
    ...state,
    data: state.data.map((chat) => {
      if (chat.id === payload.chatId) {
        chat.messages = [
          ...chat.messages,
          { text: payload.message, from: payload.role },
        ];
      }
      return { ...chat };
    }),
  }),

  [CHATS_ACTIONS.MARK_AS_READ]: (
    state: ChatsState,
    chatId: string,
  ): ChatsState => ({
    ...state,
    data: state.data.map((chat) => {
      if (chat.id === chatId) {
        chat.isNewMessages = false;
      }

      return { ...chat };
    }),
  }),

  [CHATS_ACTIONS.MARK_AS_PAID]: (
    state: ChatsState,
    chatId: string,
  ): ChatsState => ({
    ...state,
    data: state.data.map((chat) => {
      if (chat.id === chatId) {
        chat.status = 1;
      }

      return { ...chat };
    }),
  }),

  [CHATS_ACTIONS.SET_BITCOIN_TO_USD_FLOAT]: (
    state: ChatsState,
    float: number,
  ): ChatsState => ({
    ...state,
    bitcoinFloat: float,
  }),
});
