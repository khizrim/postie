import { Block } from 'src/core/block';

import template from './persona.hbs?raw';
import { type PersonaProps } from './persona.type.ts';

export class PersonaComponent extends Block<PersonaProps> {
  constructor(props: PersonaProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
