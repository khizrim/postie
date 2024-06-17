import { router } from 'src/core';
import { getUser } from 'src/services/auth';

export const initApplication = async (): Promise<void> => {
  const location = window.location.pathname;

  try {
    await getUser();

    if (location === '/' || location === '/sign-up') {
      router.go('/chats');
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