import * as React from 'react';

import { Message } from '@app/types/chats.types';

export const useScrollToBottom = (
  ref: React.RefObject<HTMLDivElement>,
  messages: Message[],
) => {
  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);
};

export const randomizer = (min: number, max: number) => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};
