import { reduxForm } from 'redux-form';

import { SEND_MESSAGE_FORM_ID } from '@app/constants/Chats/chats.constants';
import { NewMessage } from '@app/components/NewMessage/NewMessage';
import { validate } from './validation/newMessage.validation';

export const SendMessageForm = reduxForm<{}>({
  form: SEND_MESSAGE_FORM_ID,
  validate,
  destroyOnUnmount: true,
})(NewMessage);
