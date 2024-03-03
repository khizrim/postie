import Handlebars from 'handlebars';

import template from './chat-header.hbs?raw';
import { Block } from '../../core';

export class ChatHeaderComponent extends Block<never> {
  constructor(props: never) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
