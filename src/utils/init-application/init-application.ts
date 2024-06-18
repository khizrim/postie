import { authController } from 'src/controllers/auth';
import { router } from 'src/core';

export const initApplication = async (): Promise<void> => {
  const location = window.location.pathname;

  try {
    const user = await authController.getUser();

    if (!user) {
      router.go('/');
      return;
    }

    window.store.set({ user });

    if (location === '/' || location === '/sign-up') {
      router.go('/messenger');
      return;
    }

    router.go(location);
  } catch (error) {
    const errorStatus = (error as XMLHttpRequest).status;

    if (errorStatus === 401 && location !== '/sign-up') {
      router.go('/');
      return;
    }

    const routeExists = router.getRoute(location);

    if (!routeExists) {
      router.go('/not-found');
      return;
    }

    router.go(location === '/sign-up' ? '/sign-up' : '/');

    if (errorStatus >= 500) {
      router.go('/server-error');
    }
  }
};
