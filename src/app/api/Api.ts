import { ChatsApi } from './Chats/Chats';

class ApiBuilder {
  Chats = new ChatsApi();
}

export const Api = new ApiBuilder();
