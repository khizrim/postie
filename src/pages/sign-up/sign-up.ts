import { Block } from 'src/core/block';
import type { AuthProps } from 'src/layouts';

import template from './sign-up.hbs?raw';

export class SignUp extends Block<AuthProps> {
  constructor(props: AuthProps) {
    super('div', props);
  }

  init(): void {
    const { onSubmit } = this._meta.props;

    if (onSubmit) {
      this._meta.events = {
        submit: onSubmit?.bind(this),
      };
    }
  }

  render(): string {
    return template;
  }
}
