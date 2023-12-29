import type { ChatsPageProps } from './chats.types.ts';
import noChat from '../../assets/images/no-chat.png';
import userAvatar from '../../assets/images/user-avatar.png';
import { formatDate } from '../../helpers/format-date.ts';

export const ChatsContext: ChatsPageProps = {
  topPanel: {
    search: {
      name: 'search',
      size: 's',
      placeholder: 'Search',
      type: 'text',
    },
    user: {
      image: userAvatar,
      name: 'Khizri Makhmudov',
    },
  },
  chatPreviews: [
    {
      user: {
        image: userAvatar,
        name: 'Илья',
      },
      lastMessage:
        'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
      time: formatDate(new Date('August 22, 1992 19:24:00')),
      unread: 2,
    },
    {
      user: {
        image: userAvatar,
        name: 'Design Destroyer',
      },
      lastMessage: 'Можно или сегодня или завтра вечером.',
      time: formatDate(new Date('August 22, 2023 15:00:00')),
    },
  ],
  noChat: {
    title: '👋 Hey, let’s get started!',
    description: 'Select a chat from the list to begin a conversation',
    image: noChat,
    alt: 'Chat is not selected yet',
  },
};
