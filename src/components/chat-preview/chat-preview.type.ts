import type { Message } from 'src/components';

import type { PersonaProps } from 'src/components/persona';
import type { Props } from 'src/core/block';

export interface ChatPreviewProps extends Props {
  id: number;
  user: PersonaProps;
  lastMessage: Message;
  chatImage?: string;
  time?: string;
  unread?: number;
  onClick?: () => void;
  isSelected?: boolean;
}
