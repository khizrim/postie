import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './persona.hbs?raw';
import type { PersonaProps } from './persona.type';

export class PersonaComponent extends Block<PersonaProps, Refs> {
  constructor(props: PersonaProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
