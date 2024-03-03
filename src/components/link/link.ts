import Handlebars from 'handlebars';

import template from './link.hbs?raw';
import type { LinkProps } from './link.type';
import { Block } from '../../core';

export class LinkComponent extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
