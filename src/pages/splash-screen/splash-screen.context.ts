import paperclip from 'src/assets/icons/paperclip.svg';
import splashScreen from 'src/assets/images/splash-screen.png';

import { type SplashScreenProps } from './splash-screen.type.ts';

export const SplashScreenContext: SplashScreenProps = {
  content: {
    title: 'The first sprint is done 🚀',
    description: 'Here is a list of the completed pages for the first iteration',
    image: splashScreen,
    alt: 'You’re done with the first sprint! Congrats!',
  },
  links: [
    {
      text: 'Login',
      href: '/sign-in',
    },
    {
      text: 'Sign Up',
      href: '/sign-up',
    },
    {
      text: 'Chats',
      href: '/chats',
    },
    {
      text: 'Account',
      href: '/account',
    },
    {
      text: '404',
      href: '/not-found',
    },
    {
      text: '5**',
      href: '/server-error',
    },
  ],
  button: {
    icon: paperclip,
    label: 'Attach file',
    type: 'button',
    width: 'content',
    isIconOnly: true,
    onClick: () => {
      console.log('Button clicked');
    },
  },
};
