import type { UserUpdate } from 'src/api/user/user.type';
import defaultUserAvatar from 'src/assets/images/default-user-avatar.png';
import { userController } from 'src/controllers/user';
import { Block } from 'src/core/block';
import type { AccountPageProps, AccountPageRefs } from 'src/pages/settings';

import template from './settings.hbs?raw';

export class Settings extends Block<AccountPageProps, AccountPageRefs> {
  constructor(props: AccountPageProps) {
    super({
      ...props,
      user: {
        ...props.user,
        avatar: props.user?.avatar ? props.user.avatar : defaultUserAvatar,
      },
      onEdit: (e: Event) => {
        e.preventDefault();
        this.setProps({
          isEditingBlocked: false,
        });
      },
      onAvatarUpload: (e: Event) => {
        e.preventDefault();
        const file = (e.target as HTMLInputElement)?.files?.[0];

        if (file) {
          this.updateAvatar(file);
        }
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
        user,
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

  updateAvatar(avatar: File): void {
    userController
      .updateAvatar(avatar)
      .then((res) => {
        this.setProps({
          user: res,
        });
      })
      .catch(console.error);
  }

  formSubmit(e: Event): void {
    e.preventDefault();

    const user = this.getUserData();

    userController
      .update(user)
      .then((res) => {
        this.setProps({
          ...this.meta.props,
          user: res,
          isEditingBlocked: true,
        });
      })
      .catch(console.error);
  }

  render(): string {
    return template;
  }
}
