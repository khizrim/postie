import { Block } from 'src/core/block';
import type { AuthProps } from 'src/layouts/auth';

import template from './sign-in.hbs?raw';

export class SignIn extends Block<AuthProps> {
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
