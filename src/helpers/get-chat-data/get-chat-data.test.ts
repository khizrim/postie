import { expect } from 'chai';

import type { Chat } from 'src/api/chat/chat.type';
import { getChatData } from 'src/helpers/get-chat-data';

describe('getChatData', () => {
  const chat1: Chat = {
    id: 1,
    title: 'Chat 1',
    avatar: '',
    unread_count: 0,
    last_message: 'Hello',
  };
  const chat2: Chat = { id: 2, title: 'Chat 2', avatar: '', unread_count: 0, last_message: 'Hi' };
  const chat3: Chat = { id: 3, title: 'Chat 3', avatar: '', unread_count: 0, last_message: 'Hey' };
  const chats: Chat[] = [chat1, chat2, chat3];

  it('should return the correct chat object when the chat ID exists', () => {
    expect(getChatData(1, chats)).to.deep.equal(chat1);
    expect(getChatData(2, chats)).to.deep.equal(chat2);
    expect(getChatData(3, chats)).to.deep.equal(chat3);
  });

  it('should return undefined when the chat ID does not exist', () => {
    expect(getChatData(4, chats)).to.be.undefined;
  });

  it('should return undefined when the chats array is empty', () => {
    expect(getChatData(1, [])).to.be.undefined;
  });

  it('should return undefined when the chats array does not contain the chat ID', () => {
    const someOtherChats: Chat[] = [
      { id: 4, title: 'Chat 4', avatar: '', unread_count: 0, last_message: 'Hello again' },
    ];
    expect(getChatData(1, someOtherChats)).to.be.undefined;
  });

  it('should return the correct chat object when there are duplicate IDs (first match)', () => {
    const duplicateChats: Chat[] = [
      chat1,
      { id: 1, title: 'Duplicate Chat 1', avatar: '', unread_count: 0, last_message: 'Hi again' },
    ];
    expect(getChatData(1, duplicateChats)).to.deep.equal(chat1);
  });
});
