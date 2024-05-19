import type { UserSignIn } from 'src/api/auth/auth.type';
import { authController } from 'src/controllers/auth.ts';
import { router } from 'src/core';
import type { AuthProps } from 'src/layouts/auth';

export const SignInContext: AuthProps = {
  title: 'Hey 👋, welcome! Come on in!',
  description: 'Back again? Just sign in to keep up with your friends!',
  inputs: [
    {
      name: 'login',
      size: 's',
      placeholder: 'Login',
      type: 'text',
      autocomplete: 'username',
      required: true,
    },
    {
      name: 'password',
      size: 's',
      placeholder: 'Password',
      type: 'password',
      autocomplete: 'current-password',
      required: true,
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
  onSubmit: (event: Event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries()) as unknown as UserSignIn;

    authController
      .login(data)
      .then(() => {
        router.go('/chats');
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
