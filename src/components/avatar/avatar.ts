import Handlebars from 'handlebars';

import template from './avatar.hbs?raw';
import { type AvatarProps } from './avatar.type.ts';
import { Block } from '../../core';

export class AvatarComponent extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
