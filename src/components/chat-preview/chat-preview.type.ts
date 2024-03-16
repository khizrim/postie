import { type Props } from '../../core';
import { type PersonaProps } from '../persona';

export interface ChatPreviewProps extends Props {
  id: number;
  user: PersonaProps;
  lastMessage: string;
  time?: string;
  unread?: number;
}
