import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './avatar.hbs?raw';
import type { AvatarProps } from './avatar.type';

export class AvatarComponent extends Block<AvatarProps, Refs> {
  constructor(props: AvatarProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
