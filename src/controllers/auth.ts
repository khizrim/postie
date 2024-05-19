import { authApi } from 'src/api/auth';
import type { User, UserSignIn, UserSignUp } from 'src/api/auth/auth.type';
import type { UserID } from 'src/api/user/user.type';
import { getResponseOrThrow } from 'src/utils/get-response-or-throw';

class AuthController {
  async getUser(): Promise<User> {
    const res = await authApi.getUser();

    return getResponseOrThrow<User>(res);
  }

  async login(data: UserSignIn): Promise<void> {
    await authApi.login(data);
  }

  async register(data: UserSignUp): Promise<UserID> {
    const res = await authApi.register(data);

    return getResponseOrThrow<UserID>(res);
  }
}

export const authController = new AuthController();
