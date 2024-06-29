import back from 'src/assets/icons/back.svg';
import { authController } from 'src/controllers/auth';
import type { AccountPageProps } from 'src/pages/settings';
import { router } from 'src/utils/init-router';

export const SettingsContext: AccountPageProps = {
  user: {
    id: 0,
    email: '',
    login: '',
    first_name: '',
    second_name: '',
    display_name: '',
    phone: '',
    avatar: '',
  },
  inputs: [
    {
      name: 'email',
      ref: 'email',
      style: 'clear',
      label: 'Email',
      placeholder: 'johndoe@domain.com',
      type: 'email',
      autocomplete: 'email',
    },
    {
      name: 'login',
      ref: 'login',
      style: 'clear',
      label: 'Login',
      placeholder: 'johndoe',
      type: 'username',
      autocomplete: 'username',
    },
    {
      name: 'first_name',
      ref: 'first_name',
      style: 'clear',
      label: 'First Name',
      placeholder: 'John',
      type: 'text',
      autocomplete: 'given-name',
    },
    {
      name: 'second_name',
      ref: 'second_name',
      style: 'clear',
      label: 'Second Name',
      placeholder: 'Doe',
      type: 'text',
      autocomplete: 'family-name',
    },
    {
      name: 'display_name',
      ref: 'display_name',
      style: 'clear',
      label: 'Name in Chat',
      placeholder: 'John D',
      type: 'text',
      autocomplete: 'nickname',
    },
    {
      name: 'phone',
      ref: 'phone',
      style: 'clear',
      label: 'Tel',
      placeholder: '+7 999 999 99 99',
      type: 'tel',
      autocomplete: 'tel',
    },
  ],
  edit: {
    ref: 'edit',
    text: 'Edit',
    onClick: undefined,
  },
  save: {
    ref: 'save',
    text: 'Save',
    isWarning: true,
    onClick: undefined,
  },
  changePassword: {
    text: 'Change Password',
    href: '/change-password',
  },
  signOut: {
    text: 'Sign out',
    onClick: () => {
      authController
        .logout()
        .then(() => {
          router.go('/');
        })
        .catch(console.error);
    },
  },
  backButton: {
    icon: back,
    size: 'xl',
    type: 'button',
    width: 'content',
    label: 'Back to Messenger',
    onClick: () => {
      router.go('/messenger');
    },
  },
  isEditingBlocked: true,
};
