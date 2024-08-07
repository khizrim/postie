import type { UserSignIn } from 'src/api/user/user.type';
import { authController } from 'src/controllers/auth';
import type { AuthProps } from 'src/layouts/auth';
import { router } from 'src/utils/init-router';

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
      .then(async () => {
        await authController.getUser().then((user) => {
          window.store.set({ user });
        });
        router.go('/messenger');
      })
      .catch(console.error);
  },
};
