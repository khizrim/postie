import { Block } from 'src/core/block';

import template from './form.hbs?raw';

export class FormComponent extends Block<never> {
  constructor(props: never) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
