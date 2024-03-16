import type { ButtonProps, ChatPreviewProps, InputProps, Messages, PersonaProps } from 'src/components';

import { type Props } from '../../core';

export type ChatID = number;

export interface ChatsPageProps extends Props {
  topPanel: {
    search: InputProps;
    user: PersonaProps;
  };
  selectedChat: number | null;
  chatPreviews: Record<ChatID, ChatPreviewProps>;
  messages: Record<ChatID, Messages>;
  noChat?: {
    title: string;
    description: string;
    image: string;
    alt: string;
  };
  newChatButton: ButtonProps;
  chatSettingsButton: ButtonProps;
  users: Record<number, PersonaProps>;
  chatInput: InputProps;
  sendButton: ButtonProps;
  attachButton: ButtonProps;
}
