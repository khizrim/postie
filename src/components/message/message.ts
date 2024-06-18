import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';
import { formatDate } from 'src/helpers/format-date';

import template from './message.hbs?raw';
import type { Message } from './message.type';

export class MessageComponent extends Block<Message, Refs> {
  constructor(props: Message) {
    super(
      {
        ...props,
        time: formatDate(new Date(props.time)),
        isOwn: props.user_id === window.store.getState().user?.id,
      },
      'div',
    );
  }

  render(): string {
    return template;
  }
}
