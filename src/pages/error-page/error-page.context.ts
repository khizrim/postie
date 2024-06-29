import notFound from 'src/assets/images/not-found.png';
import serverError from 'src/assets/images/server-error.png';
import type { ErrorPageProps } from 'src/pages/error-page';
import { router } from 'src/utils/init-router';

export const NotFoundPageContext: ErrorPageProps = {
  error: {
    title: '404',
    description:
      "There's no page that you're looking for. Please check the link to see if it's correct",
    image: notFound,
    link: {
      text: 'Go back to chats',
      onClick: () => {
        router.go('/messenger');
      },
    },
  },
};

export const ServerErrorPageContext: ErrorPageProps = {
  error: {
    title: '500',
    description: 'We’re already working hard to find and fix the problem',
    image: serverError,
    link: {
      text: 'Go back to chats',
      onClick: () => {
        router.go('/messenger');
      },
    },
  },
};
