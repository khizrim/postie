import { Block } from 'src/core/block';

import template from './button.hbs?raw';
import type { ButtonProps } from './button.type';

export class ButtonComponent extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  init(): void {
    const { onClick } = this._meta.props;

    if (onClick) {
      this._meta.events = {
        click: onClick?.bind(this),
      };
    }
  }

  render(): string {
    return template;
  }
}
