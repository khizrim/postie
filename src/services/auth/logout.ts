import { authController } from 'src/controllers/auth';
import { router } from 'src/core';

export const logout = async (): Promise<void> => {
  await authController.logout();
  window.store.set({ user: null });
  router.go('/');
};
