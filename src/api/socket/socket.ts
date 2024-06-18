import type { Message, Messages } from 'src/components';

import type { ChatID } from 'src/api/chat/chat.type';
import type { User } from 'src/api/user/user.type';
import { EventBus } from 'src/core';

export class WebSocketHandler extends EventBus {
  private readonly socket: WebSocket | null = null;

  constructor(chatId: ChatID, user: User, token: string) {
    super();
    this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${user.id}/${chatId}/${token}`);

    this.socket.addEventListener('open', this.handleOpen);
    this.socket.addEventListener('close', this.handleClose);
    this.socket.addEventListener('message', this.handleMessage);
    this.socket.addEventListener('error', this.handleError);
  }

  send(data: string): void {
    this.socket?.send(data);
  }

  private readonly handleOpen = (): void => {
    console.log('Connection opened');
    this.socket?.send(
      JSON.stringify({
        content: '0',
        type: 'get old',
      }),
    );
  };

  private readonly handleClose = (event: CloseEvent): void => {
    if (event.wasClean) {
      console.log('Connection closed');
    } else {
      console.log('Connection closed with error');
    }

    console.log(`Code: ${event.code} | Reason: ${event.reason}`);
  };

  private readonly handleMessage = (event: { data: string }): void => {
    try {
      const data = JSON.parse(event.data) as Message | Messages;

      const { messages } = window.store.getState();

      if (Array.isArray(data) && !data.length) {
        window.store.set({ messages: [] });
      }

      if (Array.isArray(data) && data[0]?.type === 'message') {
        window.store.set({ messages: [...data.reverse()] });
      } else if (!Array.isArray(data) && data?.type === 'message') {
        window.store.set({ messages: [...messages, data] });
      }
    } catch {
      console.log('Invalid data');
    }
  };

  private readonly handleError = (event: Event): void => {
    const errorEvent = event as ErrorEvent;
    console.log('Error', errorEvent.message);
  };
}
