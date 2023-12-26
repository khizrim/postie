import type { LoginPageProps } from './login.types.ts';
import logo from '../../assets/icons/logo.svg';

export const LoginContext: LoginPageProps = {
  logo,
  title: 'Hey 👋, welcome! Come on in!',
  description: 'Back again? Just sign in to keep up with your friends!',
  inputs: [
    {
      size: 's',
      placeholder: 'Login or Email',
      type: 'email',
    },
    {
      size: 's',
      placeholder: 'Password',
      type: 'password',
    },
  ],
  button: {
    size: 'l',
    style: 'action',
    type: 'submit',
    width: 'full',
    label: 'Sign in',
  },
  link: {
    text: 'Sign up',
    href: '/sign-up',
  },
};
