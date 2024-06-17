import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './error-page.hbs?raw';
import type { ErrorPageProps } from './error-page.type';

export class ErrorPage extends Block<ErrorPageProps, Refs> {
  constructor(props: ErrorPageProps) {
    super(props, 'div');
  }

  render(): string {
    return template;
  }
}
