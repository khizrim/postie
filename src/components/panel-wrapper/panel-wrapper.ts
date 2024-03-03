import Handlebars from 'handlebars';

import template from './panel-wrapper.hbs?raw';
import { Block } from '../../core';

export class PanelWrapperComponent extends Block<never> {
  constructor(props: never) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
