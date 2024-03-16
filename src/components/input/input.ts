import { Block } from 'src/core/block';

import template from './input.hbs?raw';
import { type InputProps } from './input.type.ts';

export class InputComponent extends Block<InputProps> {
  constructor(props: InputProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
