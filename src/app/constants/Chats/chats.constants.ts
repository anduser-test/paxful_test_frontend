import { Chat } from '@app/types/chats.types';
import { USER_ROLES } from '../User/user.constants';

export const SEND_MESSAGE_FORM_ID = 'SEND_MESSAGE_FORM_ID';

export const SEND_MESSAGE_FORM_FIELDS = {
  TEXT: 'text',
};

export const CHATS: Chat[] = [
  {
    id: '1',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Peter',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 122,
        negativeDeals: 12,
      },
    },
    payMethod: 1,
    amount: 25,
    status: 1,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '2',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'May',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 42,
        negativeDeals: 51,
      },
    },
    payMethod: 2,
    amount: 252,
    status: 1,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '3',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Josh',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 215,
        negativeDeals: 145,
      },
    },
    payMethod: 3,
    amount: 255,
    status: 0,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '4',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Mickael',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 12312,
        negativeDeals: 121,
      },
    },
    payMethod: 2,
    amount: 2255,
    status: 1,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '5',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Paul',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 532,
        negativeDeals: 1523,
      },
    },
    payMethod: 1,
    amount: 2511,
    status: 0,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '6',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Felix',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 124,
        negativeDeals: 152,
      },
    },
    payMethod: 1,
    amount: 2511,
    status: 0,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '7',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Mutter',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 463,
        negativeDeals: 125,
      },
    },
    payMethod: 1,
    amount: 2511,
    status: 0,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '8',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Jeffry',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 214,
        negativeDeals: 1253,
      },
    },
    payMethod: 1,
    amount: 2511,
    status: 0,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '9',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Megan',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 66,
        negativeDeals: 12,
      },
    },
    payMethod: 1,
    amount: 2511,
    status: 0,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '10',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Kate',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 32,
        negativeDeals: 1325,
      },
    },
    payMethod: 1,
    amount: 2511,
    status: 0,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '11',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Margo',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 42,
        negativeDeals: 1235,
      },
    },
    payMethod: 1,
    amount: 2511,
    status: 0,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
  {
    id: '12',
    user: {
      avatarUrl: 'https://img.icons8.com/bubbles/2x/user.png',
      nickName: 'Shin',
      role: USER_ROLES.BUYER,
      raiting: {
        positiveDeals: 64,
        negativeDeals: 123,
      },
    },
    payMethod: 1,
    amount: 2511,
    status: 0,
    isNewMessages: true,
    messages: [
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.SELLER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
      {
        from: USER_ROLES.BUYER,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, diam ac fringilla posuere, felis erat commodo nulla, laoreet porttitor est orci ac justo. Morbi quis fermentum felis. Pellentesque sit amet dui vestibulum, ultrices tortor ac, lobortis risus. Nam porta fringilla odio ac venenatis. Quisque imperdiet ullamcorper massa at consequat.',
      },
    ],
  },
];
