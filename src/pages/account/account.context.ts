import back from 'src/assets/icons/back.svg';
import userAvatar from 'src/assets/images/user-avatar.png';
import type { AccountPageProps } from 'src/pages/account';

const currentUser = {
  email: 'khizrim@khizrim.ru',
  login: 'khizrim',
  firstName: 'Khizri',
  secondName: 'Makhmudov',
  chatName: 'Khizri M',
  tel: '+7 928 505 55 36',
};

export const AccountContext: AccountPageProps = {
  avatar: {
    image: userAvatar,
    isCurrentUser: true,
  },
  user: {
    name: `${currentUser.firstName} ${currentUser.secondName}`,
    login: `@${currentUser.login}`,
  },
  inputs: [
    {
      name: 'email',
      style: 'clear',
      label: 'Email',
      placeholder: 'johndoe@domain.com',
      value: currentUser.email,
      type: 'email',
      autocomplete: 'email',
    },
    {
      name: 'login',
      style: 'clear',
      label: 'Login',
      placeholder: 'johndoe',
      value: currentUser.login,
      type: 'username',
      autocomplete: 'username',
    },
    {
      name: 'first_name',
      style: 'clear',
      label: 'First Name',
      placeholder: 'John',
      value: currentUser.firstName,
      type: 'text',
      autocomplete: 'given-name',
    },
    {
      name: 'second_name',
      style: 'clear',
      label: 'Second Name',
      placeholder: 'Doe',
      value: currentUser.secondName,
      type: 'text',
      autocomplete: 'family-name',
    },
    {
      name: 'display_name',
      style: 'clear',
      label: 'Name in Chat',
      placeholder: 'John D',
      value: currentUser.chatName,
      type: 'text',
      autocomplete: 'nickname',
    },
    {
      name: 'phone',
      style: 'clear',
      label: 'Tel',
      placeholder: '+7 999 999 99 99',
      value: currentUser.tel,
      type: 'tel',
      autocomplete: 'tel',
    },
  ],
  actions: [
    {
      text: 'Edit',
      href: '#',
    },
    {
      text: 'Change Password',
      href: '#',
    },
    {
      text: 'Sign Out',
      href: '#',
      isWarning: true,
    },
  ],
  backButton: {
    icon: back,
    size: 'xl',
    type: 'button',
    width: 'content',
    label: 'Back to Chats',
  },
  isEditing: false,
};
