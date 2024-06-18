import defaultChatAvatar from 'src/assets/images/default-chat-avatar.png';

export const getDefaultChatAvatar = (avatar?: string): string => {
  return avatar ?? defaultChatAvatar;
};
