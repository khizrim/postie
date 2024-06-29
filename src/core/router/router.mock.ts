import { Block, type Props, type Refs } from 'src/core';

export class FirstMockPage extends Block<Props, Refs> {
  render(): string {
    return `<div><h1 id="first-mock">FirstMockPage</h1></div>`;
  }
}

export class SecondMockPage extends Block<Props, Refs> {
  render(): string {
    return `<div><h1 id="second-mock">SecondMockPage</h1></div>`;
  }
}
