import { Block } from 'src/core/block';

import template from './link.hbs?raw';
import type { LinkProps } from './link.type';

export class LinkComponent extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
