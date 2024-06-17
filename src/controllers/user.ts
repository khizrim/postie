import { userApi } from 'src/api/user';
import type { UpdatePassword, User, UserLogin, UserUpdate } from 'src/api/user/user.type.ts';
import { getResponseOrThrow } from 'src/utils/get-response-or-throw';

class UserController {
  async update(data: UserUpdate): Promise<User> {
    const res = await userApi.updateUser(data);

    return getResponseOrThrow<User>(res);
  }

  async updateAvatar(data: File): Promise<User> {
    const formData = new FormData();
    formData.append('avatar', data);

    const res = await userApi.updateAvatar(formData);

    return getResponseOrThrow<User>(res);
  }

  async updatePassword(data: UpdatePassword): Promise<void> {
    await userApi.updatePassword(data);
  }

  async search(data: UserLogin): Promise<User> {
    const res = await userApi.search(data);

    return getResponseOrThrow<User>(res);
  }
}

export const userController = new UserController();
