import type { ErrorPageProps } from './error-page.type.ts';
import notFound from '../../assets/images/not-found.png';
import serverError from '../../assets/images/server-error.png';

export const NotFoundPageContext: ErrorPageProps = {
  code: '404',
  description: "There's no page that you're looking for. Please check the link to see if it's correct",
  image: notFound,
  link: {
    text: 'Go back to chats',
    href: '/splash-screen',
  },
};

export const ServerErrorPageContext: ErrorPageProps = {
  code: '500',
  description: 'We’re already working hard to find and fix the problem',
  image: serverError,
  link: {
    text: 'Go back to chats',
    href: '/splash-screen',
  },
};
