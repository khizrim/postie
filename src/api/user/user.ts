import type { UpdateAvatar, UpdatePassword, UserLogin, UserUpdate } from 'src/api/user/user.type';
import { HttpTransport } from 'src/core/http-transport';
import { API_URL } from 'src/utils/constants';

const userTransport = new HttpTransport(API_URL);

class UserApi {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  async updateUser(data: UserUpdate): Promise<XMLHttpRequest> {
    return await userTransport.put(`${this.path}/profile`, data);
  }

  async updateAvatar(data: UpdateAvatar): Promise<XMLHttpRequest> {
    return await userTransport.put(`${this.path}/profile/avatar`, data);
  }

  async updatePassword(data: UpdatePassword): Promise<XMLHttpRequest> {
    return await userTransport.put(`${this.path}/password`, data);
  }

  async search(data: UserLogin): Promise<XMLHttpRequest> {
    return await userTransport.get(`${this.path}/search`, data);
  }
}

export const userApi = new UserApi('/user');
