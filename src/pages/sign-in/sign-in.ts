import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';
import type { AuthProps } from 'src/layouts/auth';

import template from './sign-in.hbs?raw';

export class SignIn extends Block<AuthProps, Refs> {
  constructor(props: AuthProps) {
    super(props, 'div');
  }

  init(): void {
    const { onSubmit } = this.meta.props;

    if (onSubmit) {
      this.meta.events = {
        submit: onSubmit?.bind(this),
      };
    }
  }

  render(): string {
    return template;
  }
}
