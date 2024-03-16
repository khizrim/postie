import { Block } from 'src/core/block';

import template from './chat-preview.hbs?raw';
import { type ChatPreviewProps } from './chat-preview.type.ts';

export class ChatPreviewComponent extends Block<ChatPreviewProps> {
  constructor(props: ChatPreviewProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
