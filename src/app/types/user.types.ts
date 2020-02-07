import { Raiting } from './pay.types';

export interface User {
  avatarUrl: string;
  nickName: string;
  role: string;
  raiting?: Raiting;
}

export interface UserState {
  currentUser: User;
}
