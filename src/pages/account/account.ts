import type { UserUpdate } from 'src/api/user/user.type.ts';
import defaultAvatar from 'src/assets/images/default-avatar.png';
import { userController } from 'src/controllers/user.ts';
import { Block } from 'src/core/block';
import type { AccountPageProps, AccountPageRefs } from 'src/pages/account';

import template from './account.hbs?raw';

export class Account extends Block<AccountPageProps, AccountPageRefs> {
  constructor(props: AccountPageProps) {
    super({
      ...props,
      user: {
        ...props.user,
        avatar: props.user?.avatar ? props.user.avatar : defaultAvatar,
      },
      onEdit: (e: Event) => {
        e.preventDefault();
        this.setProps({
          ...this._meta.props,
          isEditingBlocked: false,
        });
      },
      onAvatarUpload: () => {
        console.log('Avatar upload');
      },
      onSubmit: (e: Event) => {
        this.formSubmit(e);
      },
    });
  }

  init(): void {
    const user = window?.store?.getState().user;

    if (user) {
      this.setProps({
        ...this._meta.props,
        user: {
          ...user,
          avatar: user.avatar ? user.avatar : defaultAvatar,
        },
      });
    }
  }

  getUserData(): UserUpdate {
    return {
      email: this.refs.email?.getValue(),
      login: this.refs.login?.getValue(),
      first_name: this.refs.first_name?.getValue(),
      second_name: this.refs.second_name?.getValue(),
      display_name: this.refs.display_name?.getValue(),
      phone: this.refs.phone?.getValue(),
    };
  }

  updateAvatar(avatar: string): void {
    console.log('Avatar:', avatar);
  }

  formSubmit(e: Event): void {
    e.preventDefault();

    const user = this.getUserData();

    userController
      .update(user)
      .then((res) => {
        this.setProps({
          ...this._meta.props,
          user: res,
          isEditingBlocked: true,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render(): string {
    return template;
  }
}
