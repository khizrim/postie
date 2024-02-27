type MessageID = number;

type MessageType = 'text' | 'image' | 'video' | 'audio' | 'file';

interface Message {
  date: string;
  text: string;
  author: number;
  isRead: boolean;
  type: MessageType;
  isOwn?: boolean;
}

export type Messages = Record<MessageID, Message>;
