import Handlebars from 'handlebars';

import template from './message.hbs?raw';
import type { MessageProps } from './message.type';
import { Block } from '../../core';

export class MessageComponent extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
