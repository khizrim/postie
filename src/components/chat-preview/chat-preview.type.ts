import type { PersonaProps } from 'src/components/persona';
import type { Props } from 'src/core/block';

export interface ChatPreviewProps extends Props {
  id: number;
  user: PersonaProps;
  lastMessage: string;
  time?: string;
  unread?: number;
}
