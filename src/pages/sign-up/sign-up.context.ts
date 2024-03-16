import type { AuthProps } from '../../layouts';

export const SignUpContext: AuthProps = {
  title: 'Hey 🙌, let’s get to know each other!',
  description: 'New here? Dive in! Just fill in the form and let the good times roll',
  inputs: [
    {
      name: 'email',
      size: 's',
      placeholder: 'Email',
      type: 'email',
      autocomplete: 'email',
    },
    {
      name: 'login',
      size: 's',
      placeholder: 'Login',
      type: 'text',
      autocomplete: 'username',
    },
    {
      name: 'first_name',
      size: 's',
      placeholder: 'First Name',
      type: 'text',
      autocomplete: 'given-name',
    },
    {
      name: 'second_name',
      size: 's',
      placeholder: 'Second Name',
      type: 'text',
      autocomplete: 'family-name',
    },
    {
      name: 'phone',
      size: 's',
      placeholder: 'Phone Number',
      type: 'tel',
      autocomplete: 'tel',
    },
    {
      name: 'password',
      size: 's',
      placeholder: 'Password',
      type: 'password',
      autocomplete: 'new-password',
    },
    {
      name: 'password',
      size: 's',
      placeholder: 'Confirm Password',
      type: 'password',
      autocomplete: 'new-password',
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
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  },
};
