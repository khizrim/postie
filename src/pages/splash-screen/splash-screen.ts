import type { Refs } from 'src/core/block';
import { Block } from 'src/core/block';

import template from './splash-screen.hbs?raw';
import type { SplashScreenProps } from './splash-screen.type';

export class SplashScreen extends Block<SplashScreenProps, Refs> {
  constructor(props: SplashScreenProps) {
    super(props, 'div');
  }

  render(): string {
    return template;
  }
}
