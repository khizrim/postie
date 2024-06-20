import editIcon from 'src/assets/icons/pencil.svg';
import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './avatar.hbs?raw';
import type { AvatarProps } from './avatar.type';

export class AvatarComponent extends Block<AvatarProps, Refs> {
  constructor(props: AvatarProps) {
    super({ ...props, editIcon }, 'div');
  }

  init(): void {
    const { onAvatarUpload } = this._meta.props;

    if (onAvatarUpload) {
      this._meta.events = {
        change: onAvatarUpload,
      };
    }
  }

  render(): string {
    return template;
  }
}
