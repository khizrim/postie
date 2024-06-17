import type { UserSignUp } from 'src/api/user/user.type.ts';
import { authController } from 'src/controllers/auth';
import { router } from 'src/core';
import { getUser } from 'src/services';

export const signUp = async (data: UserSignUp): Promise<void> => {
  await authController.register(data);
  await getUser();
  router.go('/chats');
};
