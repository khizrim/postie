import type { ButtonProps, InputProps, PersonaProps } from 'src/components';

import type { Props } from 'src/core/block';

export type ChatID = number;

export interface ChatMessagesToken {
  token: string;
}

export interface ChatsPageProps extends Props {
  search: InputProps;
  user: Nullable<PersonaProps>;
  selectedChat: Nullable<ChatID>;
  noChat?: {
    title: string;
    description: string;
    image: string;
    alt: string;
  };
  newChatButton: ButtonProps;
  chatSettingsButton: ButtonProps;
  addUserButton: ButtonProps;
  deleteUserButton: ButtonProps;
  deleteChatButton: ButtonProps;
  chatInput: InputProps;
  sendButton: ButtonProps;
  attachButton: ButtonProps;
}
