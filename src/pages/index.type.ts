import type { ErrorPageProps } from './error-page';
import type { SplashScreenProps } from './splash-screen';
import type { AuthProps } from '../layouts/auth/auth.type.ts';

export type PageTypes = 'not-found' | 'server-error' | 'splash-screen' | 'sign-in' | 'sign-up';

export type PageProps =
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
