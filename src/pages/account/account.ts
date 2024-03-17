import { Block } from 'src/core/block';
import type { AccountPageProps } from 'src/pages/account';

import template from './account.hbs?raw';

export class Account extends Block<AccountPageProps> {
  constructor(props: AccountPageProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
