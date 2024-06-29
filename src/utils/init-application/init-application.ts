import { authController } from 'src/controllers/auth';
import { registerCustomHelpers } from 'src/core/register-custom-helpers';
import { getChatData } from 'src/helpers/get-chat-data';
import { getDefaultAvatar } from 'src/helpers/get-default-avatar';
import { getFullImageUrl } from 'src/helpers/get-full-image-url';
import { getValueByKey } from 'src/helpers/get-value-by-key';
import { isCurrentChat } from 'src/helpers/is-current-chat';
import { router } from 'src/utils/init-router';

export const initApplication = async (): Promise<void> => {
  const location = window.location.pathname;

  registerCustomHelpers({
    isCurrentChat,
    getValueByKey,
    getChatData,
    getDefaultAvatar,
    getFullImageUrl,
  });

  try {
    const user = await authController.getUser();

    if (!user) {
      router.go('/');
      return;
    }

    window.store.set({ user });

    const routeExists = router.getRoute(location);

    if (!routeExists) {
      router.go('/not-found');
      return;
    }

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

    router.go(location === '/sign-up' ? '/sign-up' : '/');

    if (errorStatus >= 500) {
      router.go('/server-error');
    }
  }
};
