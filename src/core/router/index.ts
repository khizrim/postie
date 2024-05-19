import type { ComponentConstructor } from 'src/core';
import type { AuthProps } from 'src/layouts';
import type {
  AccountPageProps,
  ChatsPageProps,
  ErrorPageProps,
  SplashScreenProps,
} from 'src/pages';
import { pages } from 'src/pages';
import { ROOT_QUERY_SELECTOR } from 'src/utils/constants';

import { Router } from './router';

const router = new Router(ROOT_QUERY_SELECTOR);

type PageConstructor = ComponentConstructor<
  ChatsPageProps | AccountPageProps | ErrorPageProps | SplashScreenProps | AuthProps
>;

router
  .use('/', pages['sign-in'].pageConstructor as PageConstructor, pages['sign-in'].context)
  .use('/sign-up', pages['sign-up'].pageConstructor as PageConstructor, pages['sign-up'].context)
  .use('/account', pages.account.pageConstructor as PageConstructor, pages.account.context)
  .use('/chats', pages.chats.pageConstructor as PageConstructor, pages.chats.context)
  .use(
    '/not-found',
    pages['not-found'].pageConstructor as PageConstructor,
    pages['not-found'].context,
  )
  .use(
    '/server-error',
    pages['server-error'].pageConstructor as PageConstructor,
    pages['server-error'].context,
  )
  .start();

export { router };
