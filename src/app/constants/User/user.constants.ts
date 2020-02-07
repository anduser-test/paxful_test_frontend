import { User } from '@app/types/user.types';

export const USER_ROLES = {
  SELLER: 'seller',
  BUYER: 'buyer',
};

export const INITIAL_USER: User = {
  avatarUrl: 'https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png',
  nickName: 'Palma',
  role: USER_ROLES.SELLER,
};
