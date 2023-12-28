import type { ChatsPageProps } from './chats.types.ts';
import noChat from '../../assets/images/no-chat.png';

export const ChatsContext: ChatsPageProps = {
  title: '👋 Hey, let’s get started!',
  description: 'Select a chat from the list to begin a conversation',
  image: noChat,
  alt: 'Chat is not selected yet',
};
