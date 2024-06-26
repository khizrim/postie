import { chatApi } from 'src/api/chat';
import type { Chat, ChatUsers, CreateChat } from 'src/api/chat/chat.type';
import type { ChatID, MessagesToken } from 'src/pages';
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
      window.store.set({ chats, selectedChat: chat.id, messages: [] });
    }
  }

  async deleteChat(chatId: ChatID): Promise<void> {
    const res = await chatApi.deleteChat({ chatId });

    if (getResponseOrThrow(res)) {
      await this.getChats();
    }
  }

  async createToken(chatId: ChatID): Promise<MessagesToken> {
    const res = await chatApi.createToken(chatId);

    return getResponseOrThrow<MessagesToken>(res);
  }

  async addUsers(data: ChatUsers): Promise<void> {
    const res = await chatApi.addUsers(data);
    console.log('Users added:', getResponseOrThrow(res));
  }

  async getUsers(chatId: ChatID): Promise<void> {
    const res = await chatApi.getUsers(chatId);
    console.log('Users:', getResponseOrThrow(res));
  }

  async deleteUsers(data: ChatUsers): Promise<void> {
    const res = await chatApi.deleteUsers(data);
    console.log('Users deleted:', getResponseOrThrow(res));
  }
}

export const chatController = new ChatController();
