import * as Pages from 'src/pages/index';
import type { PagesProps } from 'src/pages/index.type';

export const pages: PagesProps = {
  account: {
    pageConstructor: Pages.Account,
    context: Pages.AccountContext,
  },
  chats: {
    pageConstructor: Pages.Chats,
    context: Pages.ChatsContext,
  },
  'not-found': {
    pageConstructor: Pages.ErrorPage,
    context: Pages.NotFoundPageContext,
  },
  'server-error': {
    pageConstructor: Pages.ErrorPage,
    context: Pages.ServerErrorPageContext,
  },
  'splash-screen': {
    pageConstructor: Pages.SplashScreen,
    context: Pages.SplashScreenContext,
  },
  'sign-in': {
    pageConstructor: Pages.SignIn,
    context: Pages.SignInContext,
  },
  'sign-up': {
    pageConstructor: Pages.SignUp,
    context: Pages.SignUpContext,
  },
};
