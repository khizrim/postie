import { Block } from 'src/core/block';

import template from './account.hbs?raw';
import { type AccountPageProps } from './account.types.ts';

export class Account extends Block<AccountPageProps> {
  constructor(props: AccountPageProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
