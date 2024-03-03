import Handlebars from 'handlebars';

import template from './input.hbs?raw';
import { type InputProps } from './input.type.ts';
import { Block } from '../../core';

export class InputComponent extends Block<InputProps> {
  constructor(props: InputProps) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
