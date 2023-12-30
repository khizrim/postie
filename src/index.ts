import Handlebars from 'handlebars';

import * as Components from './components';
import * as Layouts from './layouts';
import * as Pages from './pages';
import type { PageProps, PagesProps, PageTypes } from './pages/index.type.ts';

import './index.css';

const pages: PagesProps = {
  chats: {
    page: Pages.ChatsPage,
    context: Pages.ChatsContext,
  },
  account: {
    page: Pages.AccountPage,
    context: Pages.AccountContext,
  },
  'not-found': {
    page: Pages.ErrorPage,
    context: Pages.NotFoundPageContext,
  },
  'server-error': {
    page: Pages.ErrorPage,
    context: Pages.ServerErrorPageContext,
  },
  'splash-screen': {
    page: Pages.SplashScreen,
    context: Pages.SplashScreenContext,
  },
  'sign-in': {
    page: Pages.SignIn,
    context: Pages.SignInContext,
  },
  'sign-up': {
    page: Pages.SignUp,
    context: Pages.SignUpContext,
  },
};

Object.entries({ ...Components, ...Layouts }).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

const navigate = ({ page, context }: PageProps): void => {
  const container = document.querySelector('.app');

  if (container !== null) {
    container.innerHTML = Handlebars.compile(page)(context);
  }

  const navLinks = document.querySelectorAll('.link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const href: string | null = (link as HTMLAnchorElement).getAttribute('href');

      if (href != null) {
        const page = href.slice(1) as PageTypes;
        navigate(pages[page]);
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  navigate(pages['splash-screen']);
});
