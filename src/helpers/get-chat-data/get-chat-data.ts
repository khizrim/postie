import type { Chat, ChatID } from 'src/api/chat/chat.type';

export const getChatData = (chatId: ChatID, chats: Chat[]): Chat | undefined =>
  chats.find((chat) => chat.id === chatId);
