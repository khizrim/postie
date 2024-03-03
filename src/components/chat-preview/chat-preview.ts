import Handlebars from 'handlebars';

import template from './chat-preview.hbs?raw';
import { type ChatPreviewProps } from './chat-preview.type.ts';
import { Block } from '../../core';

export class ChatPreviewComponent extends Block<ChatPreviewProps> {
  constructor(props: ChatPreviewProps) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
