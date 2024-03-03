import Handlebars from 'handlebars';

import template from './button.hbs?raw';
import type { ButtonProps } from './button.type';
import { Block } from '../../core';

export class ButtonComponent extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
