import { ChatsState } from '@app/types/chats.types';
import { CHATS } from '@app/mocks/chats.mock';

export const initialState: ChatsState = {
  data: CHATS,
};
