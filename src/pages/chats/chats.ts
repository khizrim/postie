import { Block } from 'src/core/block';
import type { ChatsPageProps } from 'src/pages/chats';

import template from './chats.hbs?raw';

export class Chats extends Block<ChatsPageProps> {
  constructor(props: ChatsPageProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
