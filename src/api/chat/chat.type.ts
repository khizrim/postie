import type { UserID } from 'src/api/user/user.type';

export type ChatID = number;

export interface Chat {
  id: ChatID;
  title: string;
  avatar: string | null;
  unread_count: number;
  last_message: null;
}

export type CreateChat = Pick<Chat, 'title'>;

export interface DeleteChat {
  chatId: ChatID;
}

export interface ChatUsers {
  chatId: ChatID;
  users: UserID[];
}
