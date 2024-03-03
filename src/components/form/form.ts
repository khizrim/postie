import Handlebars from 'handlebars';

import template from './form.hbs?raw';
import { Block } from '../../core';

export class FormComponent extends Block<never> {
  private readonly compiledTemplate: HandlebarsTemplateDelegate<never>;

  constructor(props: never) {
    super('div', props);
    this.compiledTemplate = Handlebars.compile(template);
  }

  render(): string {
    return this.compiledTemplate(this._meta.props);
  }
}
