import { Block, type EventHandler, type Props, type Refs } from 'src/core';

export class BlockMock extends Block<Props, Refs> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  init(): void {
    const { onClick } = this.meta.props;

    if (onClick) {
      this.meta.events = {
        click: onClick as EventHandler,
      };
    }
  }

  render(): string {
    return `<div><h1 id="block-mock">BlockMock</h1></div>`;
  }
}
