import { UserState } from '@app/types/user.types';
import { INITIAL_USER } from '@app/constants/User/user.constants';

export const initialState: UserState = {
  currentUser: INITIAL_USER,
};
