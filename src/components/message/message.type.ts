import type { Props } from 'src/core/block';

type MessageID = number;

type MessageType = 'text' | 'image' | 'video' | 'audio' | 'file';

export interface MessageProps extends Props {
  date: string;
  text: string;
  author: number;
  isRead: boolean;
  type: MessageType;
  isOwn?: boolean;
}

export type Messages = Record<MessageID, MessageProps>;
