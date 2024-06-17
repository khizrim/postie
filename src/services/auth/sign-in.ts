import type { UserSignIn } from 'src/api/user/user.type.ts';
import { authController } from 'src/controllers/auth';
import { router } from 'src/core';
import { getUser } from 'src/services/auth/get-user';

export const signIn = async (data: UserSignIn): Promise<void> => {
  await authController.login(data);
  await getUser();
  router.go('/chats');
};
