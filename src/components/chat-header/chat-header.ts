import type { Props, Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './chat-header.hbs?raw';

export class ChatHeaderComponent extends Block<Props, Refs> {
  constructor(props: never) {
    super(props, 'div');
  }

  render(): string {
    return template;
  }
}
