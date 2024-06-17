import type { UserID } from 'src/api/user/user.type.ts';
import type { Props } from 'src/core/block';
import type { ChatID } from 'src/pages';

type MessageID = number;

export interface Message extends Props {
  id: MessageID;
  user_id: UserID;
  chat_id: ChatID;
  content: string;
  file: string | null;
  is_read: boolean;
  time: string;
  type: 'message' | 'file';
}

export type Messages = Message[];
