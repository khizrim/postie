import type { Messages } from 'src/components';

import type { Chat } from 'src/api/chat/chat.type.ts';
import type { User } from 'src/api/user/user.type.ts';
import type { WebSocketController } from 'src/controllers/socket.ts';
import { Store } from 'src/core/store';
import type { ChatID } from 'src/pages';
import { initApplication } from 'src/utils/init-application';
import { registerPartialsAndComponents } from 'src/utils/register-partials-and-components';

import './index.css';

export interface AppState extends Record<string, unknown> {
  user: Nullable<User>;
  chats: Chat[];
  selectedChat: Nullable<ChatID>;
  socket?: WebSocketController;
  messages: Messages;
}

const initialAppState: AppState = {
  user: null,
  chats: [],
  selectedChat: null,
  messages: [],
};

document.addEventListener('DOMContentLoaded', () => {
  registerPartialsAndComponents();

  window.store = new Store(initialAppState);

  initApplication().catch(console.error);
});
