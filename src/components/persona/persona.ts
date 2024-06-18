import { router } from 'src/core';
import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './persona.hbs?raw';
import type { PersonaProps } from './persona.type';

export class PersonaComponent extends Block<PersonaProps, Refs> {
  constructor(props: PersonaProps) {
    super(
      {
        ...props,
        onClick: () => {
          router.go('/settings');
        },
      },
      'div',
    );
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
