import type { Template } from 'handlebars';
import Handlebars from 'handlebars';

import { registerComponent, renderDOM } from 'src/core';
import type { ChatID, PagesProps, PageTypes } from 'src/pages';

import type { ChatPreviewProps } from './components';
import * as Components from './components';
import * as Layouts from './layouts';
import * as Pages from './pages';

import './index.css';

const pages: PagesProps = {
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

Handlebars.registerPartial('Form', Components.Form);
Handlebars.registerPartial('PanelWrapper', Components.PanelWrapper);

Object.entries({ ...Layouts }).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component as Template);
});

Object.entries({ ...Components }).forEach(([name, component]) => {
  if (name !== 'form' && name !== 'panel-wrapper' && typeof component === 'function') {
    registerComponent(name, component);
  }
});

Handlebars.registerHelper('getValueByKey', function <
  T,
  K extends keyof T,
>(object: T, key: K): T[K] {
  return object[key];
});

Handlebars.registerHelper('isCurrent', function (chat: ChatPreviewProps, selectedChat: ChatID) {
  return chat.id === selectedChat;
});

const navigate = (pageName: PageTypes): void => {
  const { pageConstructor: Page, context } = pages[pageName];

  const renderedPage = new Page(context as never);

  renderDOM(renderedPage);

  const navLinks = document.querySelectorAll('.link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const href: string | null = (link as HTMLAnchorElement).getAttribute('href');

      if (href) {
        const pageName = href.slice(1) as PageTypes;

        navigate(pageName);
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  navigate('splash-screen');
});
