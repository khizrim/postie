import type { ChatsPageProps } from './chats.types.ts';
import ellipsis from '../../assets/icons/ellipsis-vertical.svg';
import newChat from '../../assets/icons/new-chat.svg';
import paperPlane from '../../assets/icons/paper-plane.svg';
import paperclip from '../../assets/icons/paperclip.svg';
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
      id: 1,
      image: userAvatar,
      name: 'Khizri Makhmudov',
    },
  },
  messages: {
    1: {
      1: {
        date: formatDate(new Date('2023-12-15T10:00:00Z')),
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
        author: 3,
        isRead: true,
        type: 'text',
      },
      2: {
        date: formatDate(new Date('2024-02-15T11:00:00Z')),
        text: 'Круто, спасибо за факт! Не знал об этом.',
        author: 1,
        isRead: true,
        type: 'text',
        isOwn: true,
      },
      3: {
        date: formatDate(new Date('2024-02-20T10:00:00Z')),
        text: 'Да, это действительно интересно. Я вот тут нашел еще один факт: в 1969 году, когда астронавты Аполлона 11 впервые высадились на Луну, они оставили там не только американский флаг, но и пластиковую фигурку белого кота с красными глазами и надписью "вы не видели меня".',
        author: 3,
        isRead: true,
        type: 'text',
      },
      4: {
        date: formatDate(new Date('2024-02-25T10:00:00Z')),
        text: 'Это тоже интересно, но я думаю, что это просто шутка.',
        author: 1,
        isRead: true,
        type: 'text',
        isOwn: true,
      },
      5: {
        date: formatDate(new Date()),
        text: '🤣',
        author: 3,
        isRead: true,
        type: 'text',
      },
    },
  },
  selectedChat: 1,
  chatPreviews: {
    1: {
      id: 1,
      user: {
        id: 2,
        image: userAvatar,
        name: 'Илья',
      },
      lastMessage:
        'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
      time: formatDate(new Date('August 22, 1992 19:24:00')),
      unread: 2,
    },
    2: {
      id: 2,
      user: {
        id: 3,
        image: userAvatar,
        name: 'Design Destroyer',
      },
      lastMessage: 'Можно или сегодня или завтра вечером.',
      time: formatDate(new Date('August 22, 2023 15:00:00')),
    },
  },
  noChat: {
    title: '👋 Hey, let’s get started!',
    description: 'Select a chat from the list to begin a conversation',
    image: noChat,
    alt: 'Chat is not selected yet',
  },
  newChatButton: {
    icon: newChat,
    size: 'xl',
    type: 'button',
    width: 'content',
    label: 'Start new conversation',
  },
  chatSettingsButton: {
    icon: ellipsis,
    type: 'button',
    width: 'content',
    onClick: () => {
      console.log('Chat settings button clicked');
    },
  },
  users: {
    1: {
      id: 1,
      image: userAvatar,
      name: 'Khizri Makhmudov',
    },
    2: {
      id: 2,
      image: userAvatar,
      name: 'Илья',
    },
    3: {
      id: 3,
      image: userAvatar,
      name: 'Design Destroyer',
    },
  },
  chatInput: {
    name: 'message',
    placeholder: 'Type a message',
    type: 'text',
  },
  sendButton: {
    icon: paperPlane,
    label: 'Send',
    type: 'button',
    width: 'content',
    isIconOnly: true,
  },
  attachButton: {
    icon: paperclip,
    label: 'Attach file',
    type: 'button',
    width: 'content',
    isIconOnly: true,
    onClick: () => {
      console.log('Attach button clicked');
    },
  },
};
