import type { UserID } from 'src/api/user/user.type';

export type ChatID = number;

export interface Chat {
  id: ChatID;
  title: string;
  avatar: Nullable<string>;
  unread_count: Nullable<number>;
  last_message: Nullable<string>;
}

export type CreateChat = Pick<Chat, 'title'>;

export interface DeleteChat {
  chatId: ChatID;
}

export interface ChatUsers {
  chatId: ChatID;
  users: UserID[];
}
