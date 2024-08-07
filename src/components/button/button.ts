import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './button.hbs?raw';
import type { ButtonProps } from './button.type';

export class ButtonComponent extends Block<ButtonProps, Refs> {
  constructor(props: ButtonProps) {
    super(props, 'button');
  }

  init(): void {
    const { onClick } = this.meta.props;

    if (onClick) {
      this.meta.events = {
        click: onClick?.bind(this),
      };
    }
  }

  render(): string {
    return template;
  }
}
