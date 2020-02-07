import { BrowserHistory } from '@app/routes/routes';
import { reset } from 'redux-form';
import { Dispatch } from 'redux';

import { CHATS_ACTIONS } from '@app/redux/actionTypes/chats';
import { store } from '@app/redux/configureStore';
import { SEND_MESSAGE_FORM_ID } from '@app/constants/Chats/chats.constants';
import { Api } from '@app/api/Api';
import { BitcoinDataResponse } from '@app/types/chats.types';

export const setActiveChat = (chatId: string) => ({
  type: CHATS_ACTIONS.SET_ACTIVE_CHAT,
  payload: chatId,
});

export const deleteChat = (chatId: string) => (dispatch: Dispatch) => {
  BrowserHistory.push('/');
  dispatch(setActiveChat(null));
  dispatch({
    type: CHATS_ACTIONS.DELETE_CHAT,
    payload: chatId,
  });
};

export const sendMessage = (chatId: string, message: string, role: string) => ({
  type: CHATS_ACTIONS.SEND_MESSAGE,
  payload: {
    chatId,
    message,
    role,
  },
});

export const markChatAsRead = (chatId: string, role: string) => ({
  type: CHATS_ACTIONS.MARK_AS_READ,
  payload: { chatId, role },
});

export const markAsPaid = (chatId: string) => ({
  type: CHATS_ACTIONS.MARK_AS_PAID,
  payload: chatId,
});

export const submit = (values: { text: string }, dispatch: Dispatch) => {
  const activeData = store.getState();

  dispatch(
    sendMessage(
      activeData.chats.activeChat,
      values.text,
      activeData.user.currentUser.role,
    ),
  );
  dispatch(reset(SEND_MESSAGE_FORM_ID));
};

export const getBitcoinData = () => (dispatch: Dispatch) => {
  dispatch({
    type: CHATS_ACTIONS.GET_BITCOIN_DATA,
    request: Api.Chats.getBitcoinData,
    onSuccess: ({ data }: BitcoinDataResponse) => {
      dispatch({
        type: CHATS_ACTIONS.SET_BITCOIN_TO_USD_FLOAT,
        payload: data.bpi.USD.rate_float,
      });
    },
  });
};
