import { expect } from 'chai';

import type { ChatPreviewProps } from 'src/components';

import type { ChatID } from 'src/pages';

import { isCurrentChat } from './is-current-chat';

describe('isCurrentChat', () => {
  const chatPreviewStub: Partial<ChatPreviewProps> = {
    id: 123,
    user: { id: 1, display_name: 'user1', avatar: 'avatar1' },
  };

  it('returns true when chat id matches selected chat id', () => {
    const selectedChat: ChatID = 123;
    const result = isCurrentChat(chatPreviewStub as ChatPreviewProps, selectedChat);
    expect(result).to.be.true;
  });

  it('returns false when chat id does not match selected chat id', () => {
    const selectedChat: ChatID = 456;
    const result = isCurrentChat(chatPreviewStub as ChatPreviewProps, selectedChat);
    expect(result).to.be.false;
  });

  it('returns false when selected chat id is undefined', () => {
    const selectedChat = undefined;
    const result = isCurrentChat(chatPreviewStub as ChatPreviewProps, selectedChat);
    expect(result).to.be.false;
  });
});
