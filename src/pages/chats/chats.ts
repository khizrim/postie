import { Block } from 'src/core/block';

import template from './chats.hbs?raw';
import { type ChatsPageProps } from './chats.types.ts';

export class Chats extends Block<ChatsPageProps> {
  constructor(props: ChatsPageProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
