import Handlebars, { type Template } from 'handlebars';

import * as Components from './components';
import { type ChatPreviewProps } from './components';
import { renderDOM } from './core';
import { registerComponent } from './core/register-components/register-components.ts';
import * as Layouts from './layouts';
import * as Pages from './pages';
import { type ChatID } from './pages';
import { type PagesProps, type PageTypes } from './pages/index.type.ts';

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

Object.entries({ ...Components, ...Layouts }).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component as Template);
});

Handlebars.registerHelper('getValueByKey', function <T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
});

Handlebars.registerHelper('isCurrent', function (chat: ChatPreviewProps, selectedChat: ChatID) {
  return chat.id === selectedChat;
});

export const registerCompileHelper = (): void => {
  Handlebars.registerHelper('compile', function (template: string, context: unknown) {
    const compiledTemplate = Handlebars.compile(template);
    return new Handlebars.SafeString(compiledTemplate(context));
  });
};

registerCompileHelper();

registerComponent('AvatarComponent', Components.AvatarComponent);
registerComponent('ButtonComponent', Components.ButtonComponent);
registerComponent('ChatHeaderComponent', Components.ChatHeaderComponent);
registerComponent('ChatInputComponent', Components.ChatInputComponent);
registerComponent('ChatPreviewComponent', Components.ChatPreviewComponent);
registerComponent('ChatsHeaderComponent', Components.ChatsHeaderComponent);
registerComponent('FlashMessageComponent', Components.FlashMessageComponent);
registerComponent('FormComponent', Components.FormComponent);
registerComponent('InputComponent', Components.InputComponent);
registerComponent('LinkComponent', Components.LinkComponent);
registerComponent('MessageComponent', Components.MessageComponent);
registerComponent('PanelWrapperComponent', Components.PanelWrapperComponent);
registerComponent('PersonaComponent', Components.PersonaComponent);

const navigate = (pageName: PageTypes): void => {
  const { pageConstructor: Page, context } = pages[pageName];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const renderedPage = new Page(context);

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
