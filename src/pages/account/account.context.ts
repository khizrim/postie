import back from 'src/assets/icons/back.svg';
import userAvatar from 'src/assets/images/user-avatar.png';
import { router } from 'src/core';
import type { AccountPageProps } from 'src/pages/account';
import { logout } from 'src/services';

const currentUser = {
  id: 1,
  email: 'khizrim@khizrim.ru',
  login: 'khizrim',
  first_name: 'Khizri',
  second_name: 'Makhmudov',
  display_name: 'Khizri M',
  phone: '+7 928 505 55 36',
  avatar: userAvatar,
};

export const AccountContext: AccountPageProps = {
  user: currentUser,
  inputs: [
    {
      name: 'email',
      ref: 'email',
      style: 'clear',
      label: 'Email',
      placeholder: 'johndoe@domain.com',
      value: currentUser.email,
      type: 'email',
      autocomplete: 'email',
    },
    {
      name: 'login',
      ref: 'login',
      style: 'clear',
      label: 'Login',
      placeholder: 'johndoe',
      value: currentUser.login,
      type: 'username',
      autocomplete: 'username',
    },
    {
      name: 'first_name',
      ref: 'first_name',
      style: 'clear',
      label: 'First Name',
      placeholder: 'John',
      value: currentUser.first_name,
      type: 'text',
      autocomplete: 'given-name',
    },
    {
      name: 'second_name',
      ref: 'second_name',
      style: 'clear',
      label: 'Second Name',
      placeholder: 'Doe',
      value: currentUser.second_name,
      type: 'text',
      autocomplete: 'family-name',
    },
    {
      name: 'display_name',
      ref: 'display_name',
      style: 'clear',
      label: 'Name in Chat',
      placeholder: 'John D',
      value: currentUser.display_name,
      type: 'text',
      autocomplete: 'nickname',
    },
    {
      name: 'phone',
      ref: 'phone',
      style: 'clear',
      label: 'Tel',
      placeholder: '+7 999 999 99 99',
      value: currentUser.phone,
      type: 'tel',
      autocomplete: 'tel',
    },
  ],
  actions: [
    {
      ref: 'edit',
      text: 'Edit',
      isWarning: true,
    },
    {
      text: 'Change Password',
      href: '/change-password',
    },
    {
      text: 'Sign out',
      onClick: (event) => {
        event.preventDefault();

        logout().catch((error) => {
          console.error(error);
        });
      },
    },
  ],
  backButton: {
    icon: back,
    size: 'xl',
    type: 'button',
    width: 'content',
    label: 'Back to Chats',
    onClick: () => {
      router.go('/chats');
    },
  },
  isLocked: true,
};
