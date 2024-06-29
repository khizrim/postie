import defaultChatAvatar from 'src/assets/images/default-chat-avatar.png';
import defaultUserAvatar from 'src/assets/images/default-user-avatar.png';

export const getDefaultAvatar = (avatar?: string, type: 'user' | 'chat' = 'chat'): string => {
  return avatar ?? (type === 'user' ? defaultUserAvatar : defaultChatAvatar);
};
