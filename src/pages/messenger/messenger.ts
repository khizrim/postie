import defaultUserAvatar from 'src/assets/images/default-user-avatar.png';
import { chatController } from 'src/controllers/chat';
import { StoreEvents } from 'src/core';
import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';
import type { MessengerProps } from 'src/pages/messenger';

import template from './messenger.hbs?raw';

export class Messenger extends Block<MessengerProps, Refs> {
  constructor(props: MessengerProps) {
    super({
      ...props,
      chats: props.chats || [],
    });

    window?.store?.on(StoreEvents.Updated, this.handleStoreUpdate.bind(this));

    chatController
      .getChats()
      .then((chats) => {
        this.setProps({ ...this._meta.props, chats });
      })
      .catch(console.error);
  }

  handleStoreUpdate(): void {
    const { selectedChat, messages } = window.store.getState();

    if (selectedChat) {
      this.setProps({
        selectedChat,
        messages,
      });
    }
  }

  init(): void {
    const user = window?.store?.getState().user;

    if (user) {
      this.setProps({
        ...this._meta.props,
        user: {
          ...user,
          avatar: user?.avatar ?? defaultUserAvatar,
        },
      });
    }
  }

  render(): string {
    return template;
  }
}
