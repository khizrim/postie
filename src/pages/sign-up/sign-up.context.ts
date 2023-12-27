import logo from '../../assets/icons/logo.svg';
import type { AuthProps } from '../../layouts/auth/auth.type.ts';

export const SignUpContext: AuthProps = {
  logo,
  title: 'Hey 🙌, let’s get to know each other!',
  description: 'New here? Dive in! Just fill in the form and let the good times roll',
  inputs: [
    {
      size: 's',
      placeholder: 'Email',
      type: 'email',
    },
    {
      size: 's',
      placeholder: 'Login',
      type: 'text',
    },
    {
      size: 's',
      placeholder: 'First Name',
      type: 'text',
    },
    {
      size: 's',
      placeholder: 'Second Name',
      type: 'text',
    },
    {
      size: 's',
      placeholder: 'Phone Number',
      type: 'tel',
    },
    {
      size: 's',
      placeholder: 'Password',
      type: 'password',
    },
    {
      size: 's',
      placeholder: 'Confirm Password',
      type: 'password',
    },
  ],
  button: {
    size: 'l',
    style: 'action',
    type: 'submit',
    width: 'full',
    label: 'Sign up',
  },
  link: {
    text: 'Sign in',
    href: '/sign-in',
  },
};
