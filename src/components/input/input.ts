import { Block } from 'src/core/block';
import * as Validators from 'src/utils/validators';

import template from './input.hbs?raw';
import type { InputProps } from './input.type';

export class InputComponent extends Block<InputProps> {
  constructor(props: InputProps) {
    super('input', props);
  }

  init(): void {
    this._meta.events = {
      change: this.validate.bind(this),
    };
  }

  validate(e: Event): boolean {
    const target = e.target as HTMLInputElement;
    this.setProps({ ...this._meta.props, value: target.value });

    const { value, required } = this._meta.props;

    if (required && !value) {
      return false;
    }

    if (!value) {
      return true;
    }

    switch (this._meta.props.type) {
      case 'email':
        return Validators.email.emailValidator(value);
      case 'login':
        return Validators.login.loginValidator(value);
      case 'name':
        return Validators.name.nameValidator(value);
      case 'message':
        return Validators.message.messageValidator(value);
      case 'password':
        return Validators.password.passwordValidator(value);
      default:
        return true;
    }
  }

  render(): string {
    return template;
  }
}
