import { Block } from 'src/core/block';

import template from './panel-wrapper.hbs?raw';

export class PanelWrapperComponent extends Block<never> {
  constructor(props: never) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
