import defaultAvatar from 'src/assets/images/default-avatar.png';
import { Block } from 'src/core/block';
import type { AccountPageProps, AccountPageRefs } from 'src/pages/account';

import template from './account.hbs?raw';

export class Account extends Block<AccountPageProps, AccountPageRefs> {
  constructor(props: AccountPageProps) {
    super('div', props);

    console.log(this.refs.first_name);
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

  render(): string {
    return template;
  }
}
