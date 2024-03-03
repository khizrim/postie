import Handlebars from 'handlebars';

import template from './chats-header.hbs?raw';
import { Block } from '../../core';

export class ChatsHeaderComponent extends Block<never> {
  constructor(props: never) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
