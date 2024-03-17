import type { ComponentConstructor } from 'src/core/register-component';
import type { AuthProps } from 'src/layouts/auth';

import type { AccountPageProps } from './account';
import type { ChatsPageProps } from './chats';
import type { ErrorPageProps } from './error-page';
import type { SplashScreenProps } from './splash-screen';

export type PageTypes =
  | 'chats'
  | 'account'
  | 'not-found'
  | 'server-error'
  | 'splash-screen'
  | 'sign-in'
  | 'sign-up';

export interface PagePropsMap {
  chats: ChatsPageProps;
  account: AccountPageProps;
  'not-found': ErrorPageProps;
  'server-error': ErrorPageProps;
  'splash-screen': SplashScreenProps;
  'sign-in': AuthProps;
  'sign-up': AuthProps;
}

export type PagesProps = {
  [K in PageTypes]: {
    pageConstructor: ComponentConstructor<PagePropsMap[K]>;
    context: PagePropsMap[K];
  };
};
