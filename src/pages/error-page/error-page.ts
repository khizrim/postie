import Handlebars from 'handlebars';

import template from './error-page.hbs?raw';
import type { ErrorPageProps } from './error-page.type.ts';
import { Block } from '../../core';

export class ErrorPage extends Block<ErrorPageProps> {
  private readonly compiledTemplate: HandlebarsTemplateDelegate<ErrorPageProps>;

  constructor(props: ErrorPageProps) {
    super('div', props);
    this.compiledTemplate = Handlebars.compile(template);
  }

  render(): string {
    return this.compiledTemplate(this._meta.props);
  }
}
