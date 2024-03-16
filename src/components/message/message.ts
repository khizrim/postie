import { Block } from 'src/core/block';

import template from './message.hbs?raw';
import type { MessageProps } from './message.type';

export class MessageComponent extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
