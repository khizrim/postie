import { type PropsType } from '../../core';
import { type PersonaProps } from '../persona';

export interface ChatPreviewProps extends PropsType {
  id: number;
  user: PersonaProps;
  lastMessage: string;
  time?: string;
  unread?: number;
}
