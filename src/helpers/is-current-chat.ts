import type { ChatPreviewProps } from 'src/components';

import type { ChatID } from 'src/pages';

export const isCurrentChat = (chat: ChatPreviewProps, selectedChat: ChatID): boolean =>
  chat.id === selectedChat;
