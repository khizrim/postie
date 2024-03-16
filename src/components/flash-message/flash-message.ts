import { Block } from 'src/core/block';

import template from './flash-message.hbs?raw';
import { type FlashMessageProps } from './flash-message.type.ts';

export class FlashMessageComponent extends Block<FlashMessageProps> {
  constructor(props: FlashMessageProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
