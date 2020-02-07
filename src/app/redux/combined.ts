import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import { ChatsState } from '@app/types/chats.types';
import { chats } from '@app/redux/reducers/chats/chats.reducer';
import { user } from '@app/redux/reducers/user/user.reducer';
import { UserState } from '@app/types/user.types';

export interface RootStore {
  chats: ChatsState;
  user: UserState;
}

export const rootReducer = combineReducers({ chats, user, form: FormReducer });
