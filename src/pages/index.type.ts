import type { AccountPageProps } from './account';
import type { ChatsPageProps } from './chats';
import type { ErrorPageProps } from './error-page';
import type { SplashScreenProps } from './splash-screen';
import type { AuthProps } from '../layouts';

export type PageTypes = 'chats' | 'account' | 'not-found' | 'server-error' | 'splash-screen' | 'sign-in' | 'sign-up';

export type PageProps =
  | {
      page: string;
      context: ChatsPageProps;
    }
  | {
      page: string;
      context: AccountPageProps;
    }
  | {
      page: string;
      context: ErrorPageProps;
    }
  | {
      page: string;
      context: SplashScreenProps;
    }
  | {
      page: string;
      context: AuthProps;
    };

export type PagesProps = Record<PageTypes, PageProps>;
