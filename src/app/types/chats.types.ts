import { User } from './user.types';

export interface ChatsState {
  data?: Chat[];
  activeChat?: string;
  bitcoinFloat?: number;
}

export interface Chat {
  id: string;
  user: User;
  payMethod: number;
  amount: number;
  status: number;
  messages?: Message[];
  isNewMessages: boolean;
  newMessagesFrom?: {
    from: string;
  };
}

export interface Message {
  text: string;
  from: string;
}

export interface BitcoinDataResponse {
  data: {
    bpi: {
      [key: string]: { rate_float: number };
    };
  };
}
