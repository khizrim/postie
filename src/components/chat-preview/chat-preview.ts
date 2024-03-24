import type { ChatPreviewProps } from 'src/components/chat-preview';
import { Block } from 'src/core/block';

import template from './chat-preview.hbs?raw';

export class ChatPreviewComponent extends Block<ChatPreviewProps> {
  constructor(props: ChatPreviewProps) {
    super('article', props);
  }

  init(): void {
    const { onClick } = this._meta.props;

    if (onClick) {
      this._meta.events = {
        click: onClick?.bind(this),
      };
    }
  }

  render(): string {
    return template;
  }
}
