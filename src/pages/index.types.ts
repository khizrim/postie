import type { ErrorPageProps } from './error-page';
import type { LoginPageProps } from './login';
import { type SignUpPageProps } from './sign-up';
import type { SplashScreenProps } from './splash-screen';

export type PageTypes = 'not-found' | 'server-error' | 'splash-screen' | 'login' | 'sign-up';

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
      context: LoginPageProps;
    }
  | {
      page: string;
      context: SignUpPageProps;
    };

export type PagesProps = Record<PageTypes, PageProps>;
