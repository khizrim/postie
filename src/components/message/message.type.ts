import { type PropsType } from '../../core';

type MessageID = number;

type MessageType = 'text' | 'image' | 'video' | 'audio' | 'file';

export interface MessageProps extends PropsType {
  date: string;
  text: string;
  author: number;
  isRead: boolean;
  type: MessageType;
  isOwn?: boolean;
}

export type Messages = Record<MessageID, MessageProps>;
