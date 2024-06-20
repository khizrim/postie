import type { ChatPreviewProps } from 'src/components/chat-preview';
import { WebSocketController } from 'src/controllers/socket';
import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';
import { formatDate } from 'src/helpers/format-date';
import type { ChatID } from 'src/pages';

import template from './chat-preview.hbs?raw';

export class ChatPreviewComponent extends Block<ChatPreviewProps, Refs> {
  constructor(props: ChatPreviewProps) {
    super(
      {
        ...props,
        lastMessage: {
          ...props.lastMessage,
          time: props.lastMessage?.time ? formatDate(new Date(props.lastMessage?.time)) : '',
        },
        chatImage: props.chatImage,
        onClick: () => {
          this.setCurrentChat(props.id);
        },
      },
      'article',
    );
  }

  setCurrentChat(chatId: ChatID): void {
    const newSocket = new WebSocketController(chatId);
    window.store.set({ selectedChat: chatId, socket: newSocket, messages: [] });
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
