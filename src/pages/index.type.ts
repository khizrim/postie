import { type AccountPageProps } from './account';
import { type ChatsPageProps } from './chats';
import { type ErrorPageProps } from './error-page';
import { type SplashScreenProps } from './splash-screen';
import { type Block, type Props } from '../core';
import type { AuthProps } from '../layouts';

export type PageTypes = 'chats' | 'account' | 'not-found' | 'server-error' | 'splash-screen' | 'sign-in' | 'sign-up';

export interface PagePropsMap {
  chats: ChatsPageProps;
  account: AccountPageProps;
  'not-found': ErrorPageProps;
  'server-error': ErrorPageProps;
  'splash-screen': SplashScreenProps;
  'sign-in': AuthProps;
  'sign-up': AuthProps;
}

export type PageConstructor<T extends Props> = new (args: T) => Block<T>;

export type PagesProps = {
  [K in PageTypes]: {
    pageConstructor: PageConstructor<PagePropsMap[K]>;
    context: PagePropsMap[K];
  };
};
