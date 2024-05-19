import type { ChatUsers, CreateChat, DeleteChat } from 'src/api/chat/chat.type';
import { API_URL } from 'src/utils/constants';
import { HttpTransport } from 'src/utils/http-transport';

const chatTransport = new HttpTransport(API_URL);

class ChatApi {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  async getChats(): Promise<XMLHttpRequest> {
    return await chatTransport.get(`${this.path}`);
  }

  async createToken(id: number): Promise<XMLHttpRequest> {
    return await chatTransport.post(`${this.path}/token/${id}`);
  }

  async createChat(data: CreateChat): Promise<XMLHttpRequest> {
    return await chatTransport.post(`${this.path}`, data);
  }

  async deleteChat(data: DeleteChat): Promise<XMLHttpRequest> {
    return await chatTransport.delete(`${this.path}`, data);
  }

  async getUsers(id: number): Promise<XMLHttpRequest> {
    return await chatTransport.get(`${this.path}/${id}/users`);
  }

  async addUsers(data: ChatUsers): Promise<XMLHttpRequest> {
    return await chatTransport.put(`${this.path}/users`, data);
  }

  async deleteUsers(data: ChatUsers): Promise<XMLHttpRequest> {
    return await chatTransport.delete(`${this.path}/users`, data);
  }
}

export const chatApi = new ChatApi('/chat');
