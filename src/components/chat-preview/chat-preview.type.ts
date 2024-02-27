import { type PersonaProps } from '../persona';

export interface ChatPreviewProps {
  id: number;
  user: PersonaProps;
  lastMessage: string;
  time?: string;
  unread?: number;
}
