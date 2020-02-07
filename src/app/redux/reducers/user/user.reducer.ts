import { createReducer } from '@app/redux/reducers/createReducer';
import { initialState } from '@app/redux/states/user';
import { USER_ACTIONS } from '@app/redux/actionTypes/user';
import { UserState } from '@app/types/user.types';

export const user = createReducer(initialState, {
  [USER_ACTIONS.CHANGE_USER_TYPE]: (
    state: UserState,
    userType: string,
  ): UserState => ({
    ...state,
    currentUser: {
      ...state.currentUser,
      role: userType,
    },
  }),
});
