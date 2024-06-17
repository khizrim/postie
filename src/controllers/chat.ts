import { chatApi } from 'src/api/chat';
import type { Chat, ChatUsers, CreateChat } from 'src/api/chat/chat.type.ts';
import type { ChatID, ChatMessagesToken } from 'src/pages';
import { getResponseOrThrow } from 'src/utils/get-response-or-throw';

class ChatController {
  async getChats(): Promise<Chat[]> {
    const res = await chatApi.getChats();

    const chats = getResponseOrThrow<Chat[]>(res);
    window.store.set({ chats });

    return chats;
  }

  async createChat(data: CreateChat): Promise<void> {
    const res = await chatApi.createChat(data);

    const chat = getResponseOrThrow<Chat>(res);

    if (chat) {
      const chats = await this.getChats();
      window.store.set({ chats });
    }
  }

  async deleteChat(chatId: ChatID): Promise<void> {
    const res = await chatApi.deleteChat({ chatId });

    if (getResponseOrThrow(res)) {
      const chats = await this.getChats();
      window.store.set({ chats });
    }
  }

  async createToken(chatId: ChatID): Promise<ChatMessagesToken> {
    const res = await chatApi.createToken(chatId);

    return getResponseOrThrow<ChatMessagesToken>(res);
  }

  async addUsers(data: ChatUsers): Promise<void> {
    const res = await chatApi.addUsers(data);
    console.log('Users added:', getResponseOrThrow(res));
  }
}

export const chatController = new ChatController();
