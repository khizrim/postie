import Handlebars from 'handlebars';

import template from './chat-input.hbs?raw';
import { Block } from '../../core';

export class ChatInputComponent extends Block<never> {
  constructor(props: never) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
