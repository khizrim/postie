import * as console from 'node:console';

import ellipsis from 'src/assets/icons/ellipsis-vertical.svg';
import newChat from 'src/assets/icons/new-chat.svg';
import paperPlane from 'src/assets/icons/paper-plane.svg';
import paperclip from 'src/assets/icons/paperclip.svg';
import noChat from 'src/assets/images/no-chat.png';
import { chatController } from 'src/controllers/chat.ts';
import type { ChatsPageProps } from 'src/pages/chats';

export const ChatsContext: ChatsPageProps = {
  search: {
    name: 'search',
    size: 's',
    placeholder: 'Search',
    type: 'text',
  },
  user: null,
  selectedChat: null,
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
    onClick: () => {
      const chatName = prompt('Enter chat name');

      if (chatName) {
        chatController.createChat({ title: chatName }).catch((error) => {
          console.error('Failed to create chat:', error);
        });
      }
    },
  },
  chatSettingsButton: {
    icon: ellipsis,
    type: 'button',
    width: 'content',
    onClick: () => {
      console.log('Chat settings button clicked');
    },
  },
  addUserButton: {
    label: 'Add user',
    type: 'button',
    width: 'content',
    onClick: () => {
      const userId = prompt('Enter user ID');
      const chatId = window.store.getState().selectedChat;
      if (userId && chatId) {
        chatController
          .addUsers({
            users: [Number(userId)],
            chatId,
          })
          .catch((error) => {
            console.error('Failed to add user:', error);
          });
      }
    },
  },
  deleteUserButton: {
    label: 'Delete user',
    type: 'button',
    width: 'content',
    onClick: () => {
      const chatId = window.store.getState().selectedChat;

      const userId = prompt('Enter user ID');

      if (userId && chatId) {
        chatController
          .deleteUsers({
            users: [Number(userId)],
            chatId,
          })
          .catch((error) => {
            console.error('Failed to delete user:', error);
          });
      }
    },
  },
  deleteChatButton: {
    label: 'Delete chat',
    type: 'button',
    width: 'content',
    onClick: () => {
      const chatId = window.store.getState().selectedChat;

      const deleteConfirmed = confirm('Are you sure you want to delete this chat?');

      if (chatId && deleteConfirmed) {
        chatController.deleteChat(chatId).catch((error) => {
          console.error('Failed to delete chat:', error);
        });
      }
    },
  },
  chatInput: {
    name: 'message',
    placeholder: 'Type a message',
    type: 'text',
    required: true,
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
