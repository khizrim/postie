import type { ComponentConstructor } from 'src/core/register-component';
import type { AuthProps } from 'src/layouts/auth';

import type { ErrorPageProps } from './error-page';
import type { MessengerProps } from './messenger';
import type { AccountPageProps } from './settings';
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
  chats: MessengerProps;
  account: AccountPageProps;
  'not-found': ErrorPageProps;
  'server-error': ErrorPageProps;
  'splash-screen': SplashScreenProps;
  'sign-in': AuthProps;
  'sign-up': AuthProps;
}

export interface Page<K extends keyof PagePropsMap> {
  pageConstructor: ComponentConstructor<PagePropsMap[K]>;
  context: PagePropsMap[K];
}

export type PagesProps = {
  [K in PageTypes]: Page<K>;
};
