import defaultAvatar from 'src/assets/images/default-avatar.png';
import { chatController } from 'src/controllers/chat.ts';
import { StoreEvents } from 'src/core';
import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';
import type { ChatsPageProps } from 'src/pages/chats';

import template from './chats.hbs?raw';

export class Chats extends Block<ChatsPageProps, Refs> {
  constructor(props: ChatsPageProps) {
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
          avatar: user?.avatar ?? defaultAvatar,
        },
      });
    }
  }

  render(): string {
    return template;
  }
}
