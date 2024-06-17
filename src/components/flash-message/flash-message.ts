import type { FlashMessageProps } from 'src/components/flash-message';
import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './flash-message.hbs?raw';

export class FlashMessageComponent extends Block<FlashMessageProps, Refs> {
  constructor(props: FlashMessageProps) {
    super(props, 'div');
  }

  render(): string {
    return template;
  }
}
