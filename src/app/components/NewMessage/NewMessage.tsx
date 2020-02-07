import * as React from 'react';
import { Field, InjectedFormProps, Form } from 'redux-form';

import './newMessage.scss';
import { submit } from '@app/redux/actions/chats/chats.actions';
import { BUTTON_TYPES } from '@app/constants/Button/button.constants';
import { Button } from '../base/Button/Button';
import Send from '@assets/img/send.svg';
import { SEND_MESSAGE_FORM_FIELDS } from '@app/constants/Chats/chats.constants';

const NewMessage = (props: InjectedFormProps) => (
  <Form onSubmit={props.handleSubmit(submit)} className="new-message-form">
    <Field
      name={SEND_MESSAGE_FORM_FIELDS.TEXT}
      component="textarea"
      className="paxful-input"
      type="text"
      placeholder="Type your message..."
    />

    <Button type={BUTTON_TYPES.TRANSPARENT_BUTTON} action="submit">
      <Send width={25} fill="#888" />
    </Button>
  </Form>
);

export { NewMessage };
