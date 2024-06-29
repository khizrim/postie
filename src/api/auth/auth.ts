import type { UserSignIn, UserSignUp } from 'src/api/user/user.type';
import { HttpTransport } from 'src/core/http-transport';
import { API_URL } from 'src/utils/constants';

const authTransport = new HttpTransport(API_URL);

class AuthApi {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  async getUser(): Promise<XMLHttpRequest> {
    return await authTransport.get(`${this.path}/user`);
  }

  async login(data: UserSignIn): Promise<XMLHttpRequest> {
    return await authTransport.post(`${this.path}/signin`, data);
  }

  async register(data: UserSignUp): Promise<XMLHttpRequest> {
    return await authTransport.post(`${this.path}/signup`, data);
  }

  async logout(): Promise<XMLHttpRequest> {
    return await authTransport.post(`${this.path}/logout`);
  }
}

export const authApi = new AuthApi('/auth');
