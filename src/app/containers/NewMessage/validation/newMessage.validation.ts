import { FormErrors } from 'redux-form';

import { FIELD_ERRORS } from '@app/constants/Chats/errors/errors.constants';

interface MessageData {
  text: string;
}

export const validate = (
  values: Partial<MessageData>,
): FormErrors<MessageData, string> => {
  const errors: Partial<{ [key: string]: string }> = {};

  if (!values.text || (values.text && !values.text.trim())) {
    errors.text = FIELD_ERRORS.REQUIRED;
  }

  return errors;
};
