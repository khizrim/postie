import { Block } from 'src/core/block';

import template from './splash-screen.hbs?raw';
import type { SplashScreenProps } from './splash-screen.type';

export class SplashScreen extends Block<SplashScreenProps> {
  constructor(props: SplashScreenProps) {
    super('div', props);
  }

  render(): string {
    return template;
  }
}
