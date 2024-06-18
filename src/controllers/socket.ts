import type { ChatID } from 'src/api/chat/chat.type';
import { WebSocketHandler } from 'src/api/socket';
import type { User } from 'src/api/user/user.type';
import { chatController } from 'src/controllers/chat';

export class WebSocketController {
  private webSocket?: WebSocketHandler;
  private token?: string;
  private user?: Nullable<User>;

  constructor(chatId: ChatID) {
    void this.initialize(chatId);
  }

  async initialize(chatId: ChatID): Promise<void> {
    this.token = await chatController.createToken(chatId).then((response) => response.token);
    this.user = window.store.getState().user;

    if (!this.user) {
      throw new Error('User is not authenticated');
    }

    this.webSocket = new WebSocketHandler(chatId, this.user, this.token);
  }

  send(message: string): void {
    if (!this.webSocket) {
      throw new Error('WebSocket is not initialized');
    }
    this.webSocket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      }),
    );
  }
}
