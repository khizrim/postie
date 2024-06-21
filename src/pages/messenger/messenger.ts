import { chatController } from 'src/controllers/chat';
import { StoreEvents } from 'src/core';
import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';
import type { MessengerProps } from 'src/pages/messenger';

import template from './messenger.hbs?raw';

export class Messenger extends Block<MessengerProps, Refs> {
  constructor(props: MessengerProps) {
    super(props);

    window.store?.on(StoreEvents.Updated, this.updateProps.bind(this));
  }

  getChatList(): void {
    chatController.getChats().catch(console.error);
  }

  updateProps(): void {
    this.setProps(window.store.getState());
  }

  init(): void {
    this.getChatList();
  }

  render(): string {
    return template;
  }
}
