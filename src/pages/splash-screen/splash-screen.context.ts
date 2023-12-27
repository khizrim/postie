import { type SplashScreenProps } from './splash-screen.type.ts';
import splashScreen from '../../assets/images/splash-screen.png';

export const SplashScreenContext: SplashScreenProps = {
  title: 'The first sprint is done 🚀',
  description: 'Here is a list of the completed pages for the first iteration',
  image: splashScreen,
  alt: 'You’re done with the first sprint! Congrats!',
  links: [
    {
      text: 'Login',
      href: '/login',
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
};
