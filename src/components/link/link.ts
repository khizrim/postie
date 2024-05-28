import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './link.hbs?raw';
import type { LinkProps } from './link.type';

export class LinkComponent extends Block<LinkProps, Refs> {
  constructor(props: LinkProps) {
    super('a', props);
  }

  init(): void {
    const { onClick } = this._meta.props;

    if (onClick) {
      this._meta.events = {
        click: onClick?.bind(this),
      };
    }
  }

  render(): string {
    return template;
  }
}
