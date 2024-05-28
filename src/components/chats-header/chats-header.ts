import type { Props, Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './chats-header.hbs?raw';

export class ChatsHeaderComponent extends Block<Props, Refs> {
  constructor(props: never) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
