import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './link.hbs?raw';
import type { LinkProps } from './link.type';

export class LinkComponent extends Block<LinkProps, Refs> {
  constructor(props: LinkProps) {
    super(props, 'a');
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
