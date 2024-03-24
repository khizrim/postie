import { Block } from 'src/core/block';
import { phoneInputMask } from 'src/helpers/phone-input-mask';
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
      input: this.maskPhone.bind(this),
    };
  }

  maskPhone(e: Event): void {
    if (this._meta.props.type === 'tel') {
      phoneInputMask(e);
    }
  }

  validate(e: Event): boolean {
    const target = e.target as HTMLInputElement;
    this.setProps({ ...this._meta.props, value: target.value });

    const { value, required } = this._meta.props;

    if (required && !value) {
      this.setProps({
        ...this._meta.props,
        errorMessage: 'This field is required',
      });

      return false;
    }

    if (!value) {
      this.setProps({
        ...this._meta.props,
        errorMessage: undefined,
      });

      return true;
    }

    switch (this._meta.props.name) {
      case 'email': {
        const emailResult = Validators.email.emailValidator(value);

        this.setProps({
          ...this._meta.props,
          errorMessage: emailResult.errorMessage,
        });

        return emailResult.isValid;
      }
      case 'login': {
        const loginResult = Validators.login.loginValidator(value);

        this.setProps({
          ...this._meta.props,
          errorMessage: loginResult.errorMessage,
        });

        return loginResult.isValid;
      }
      case 'first_name':
      case 'second_name': {
        const nameResult = Validators.name.nameValidator(value);

        this.setProps({
          ...this._meta.props,
          errorMessage: nameResult.errorMessage,
        });

        return nameResult.isValid;
      }
      case 'message': {
        const messageResult = Validators.message.messageValidator(value);

        this.setProps({
          ...this._meta.props,
          errorMessage: messageResult.errorMessage,
        });

        return messageResult.isValid;
      }
      case 'password': {
        const passwordResult = Validators.password.passwordValidator(value);

        this.setProps({
          ...this._meta.props,
          errorMessage: passwordResult.errorMessage,
        });

        return passwordResult.isValid;
      }
      default: {
        this.setProps({
          ...this._meta.props,
          errorMessage: undefined,
        });

        return true;
      }
    }
  }

  render(): string {
    return template;
  }
}
