import { axiosAPI } from '@app/config';
import { AppRoutesPaths } from '@app/routes/app-routes-paths';

export class ChatsApi {
  getBitcoinData() {
    return axiosAPI.get(AppRoutesPaths.CHATS.USD_PRICE);
  }
}
