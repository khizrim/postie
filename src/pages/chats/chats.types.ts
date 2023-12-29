import type { ButtonProps, ChatPreviewProps, InputProps, PersonaProps } from '../../components';

export interface ChatsPageProps {
  topPanel: {
    search: InputProps;
    user: PersonaProps;
  };
  chatPreviews: ChatPreviewProps[];
  noChat?: {
    title: string;
    description: string;
    image: string;
    alt: string;
  };
  newChatButton: ButtonProps;
}
