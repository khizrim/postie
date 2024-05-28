import type { Props, Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './chat-input.hbs?raw';

export class ChatInputComponent extends Block<Props, Refs> {
  constructor(props: never) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
