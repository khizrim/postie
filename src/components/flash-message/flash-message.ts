import type { FlashMessageProps } from 'src/components/flash-message';
import { Block } from 'src/core/block';

import template from './flash-message.hbs?raw';

export class FlashMessageComponent extends Block<FlashMessageProps> {
  constructor(props: FlashMessageProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
