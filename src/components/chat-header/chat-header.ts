import { Block } from 'src/core/block';

import template from './chat-header.hbs?raw';

export class ChatHeaderComponent extends Block<never> {
  constructor(props: never) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
