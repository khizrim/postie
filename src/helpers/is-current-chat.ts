import Handlebars from 'handlebars';

import type { ChatPreviewProps } from 'src/components';

import type { ChatID } from 'src/pages';

Handlebars.registerHelper('isCurrent', function (chat: ChatPreviewProps, selectedChat: ChatID) {
  return chat.id === selectedChat;
});
