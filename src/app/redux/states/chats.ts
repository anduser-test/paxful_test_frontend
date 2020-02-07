import { ChatsState } from '@app/types/chats.types';
import { CHATS } from '@app/constants/Chats/chats.constants';

export const initialState: ChatsState = {
  data: CHATS,
};
