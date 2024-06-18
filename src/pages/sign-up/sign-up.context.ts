import type { UserSignUp } from 'src/api/user/user.type.ts';
import { authController } from 'src/controllers/auth.ts';
import { router } from 'src/core';
import type { AuthProps } from 'src/layouts/auth';

export const SignUpContext: AuthProps = {
  title: 'Hey 🙌, let’s get to know each other!',
  description: 'New here? Dive in! Just fill in the form and let the good times roll',
  inputs: [
    {
      name: 'email',
      ref: 'email',
      size: 's',
      placeholder: 'Email',
      type: 'email',
      autocomplete: 'email',
      required: true,
    },
    {
      name: 'login',
      ref: 'login',
      size: 's',
      placeholder: 'Login',
      type: 'text',
      autocomplete: 'username',
      required: true,
    },
    {
      name: 'first_name',
      ref: 'first_name',
      size: 's',
      placeholder: 'First Name',
      type: 'text',
      autocomplete: 'given-name',
      required: true,
    },
    {
      name: 'second_name',
      ref: 'second_name',
      size: 's',
      placeholder: 'Second Name',
      type: 'text',
      autocomplete: 'family-name',
      required: false,
    },
    {
      name: 'phone',
      ref: 'phone',
      size: 's',
      placeholder: 'Phone Number',
      type: 'tel',
      autocomplete: 'tel',
      required: true,
    },
    {
      name: 'password',
      ref: 'password',
      size: 's',
      placeholder: 'Password',
      type: 'password',
      autocomplete: 'new-password',
      required: true,
    },
    {
      name: 'password',
      ref: 'password_confirmation',
      size: 's',
      placeholder: 'Confirm Password',
      type: 'password',
      autocomplete: 'new-password',
      required: true,
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
  onSubmit: (event: Event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries()) as unknown as UserSignUp;

    authController
      .register(data)
      .then(() => {
        router.go('/chat');
      })
      .catch(console.error);
  },
};
