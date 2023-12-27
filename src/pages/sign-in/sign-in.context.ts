import logo from '../../assets/icons/logo.svg';
import type { AuthProps } from '../../layouts/auth/auth.type.ts';

export const SignInContext: AuthProps = {
  logo,
  title: 'Hey 👋, welcome! Come on in!',
  description: 'Back again? Just sign in to keep up with your friends!',
  inputs: [
    {
      name: 'login',
      size: 's',
      placeholder: 'Login or Email',
      type: 'email',
      autocomplete: 'username',
    },
    {
      name: 'password',
      size: 's',
      placeholder: 'Password',
      type: 'password',
      autocomplete: 'current-password',
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
