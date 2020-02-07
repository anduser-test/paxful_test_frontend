import { axiosAPI } from '@app/config';
import { AppRoutesPaths } from '@app/constants/routes/appRoutes.constants';

export class ChatsApi {
  getBitcoinData() {
    return axiosAPI.get(AppRoutesPaths.CHATS.USD_PRICE);
  }
}
