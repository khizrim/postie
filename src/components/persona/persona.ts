import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';
import { router } from 'src/utils/init-router';

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
