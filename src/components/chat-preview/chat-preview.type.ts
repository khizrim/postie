import { type PersonaProps } from '../persona';

export interface ChatPreviewProps {
  user: PersonaProps;
  lastMessage: string;
  time?: string;
  unread?: number;
}
