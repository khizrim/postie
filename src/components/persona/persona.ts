import Handlebars from 'handlebars';

import template from './persona.hbs?raw';
import { type PersonaProps } from './persona.type.ts';
import { Block } from '../../core';

export class PersonaComponent extends Block<PersonaProps> {
  constructor(props: PersonaProps) {
    super('div', props);
  }

  render(): string {
    return Handlebars.compile(template)(this._meta.props);
  }
}
