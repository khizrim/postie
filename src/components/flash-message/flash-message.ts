import Handlebars from 'handlebars';

import template from './flash-message.hbs?raw';
import { type FlashMessageProps } from './flash-message.type.ts';
import { Block } from '../../core';

export class FlashMessageComponent extends Block<FlashMessageProps> {
  constructor(props: FlashMessageProps) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
