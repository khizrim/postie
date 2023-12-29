import type { ChatPreviewProps, InputProps, PersonaProps } from '../../components';

export interface ChatsPageProps {
  'top-panel': {
    search: InputProps;
    user: PersonaProps;
  };
  'chat-previews': ChatPreviewProps[];
  'no-chat': {
    title: string;
    description: string;
    image: string;
    alt: string;
  };
}
