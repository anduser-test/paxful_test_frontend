import { USER_ACTIONS } from '@app/redux/actionTypes/user';

export const changeUserType = (userType: string) => ({
  type: USER_ACTIONS.CHANGE_USER_TYPE,
  payload: userType,
});
