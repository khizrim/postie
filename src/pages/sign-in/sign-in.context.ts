import { navigate } from 'src/core/navigate';
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
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    setTimeout(() => {
      navigate('chats');
    }, 300);
  },
};
