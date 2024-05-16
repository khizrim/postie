import type { BlockInstance, ComponentConstructor, Props } from 'src/core';
import { renderDOM } from 'src/core';

export class Route {
  private _path: string;
  private readonly _blockConstructor: ComponentConstructor<Props>;
  private _block: BlockInstance | null;
  private readonly _props: Props;

  constructor(pathname: string, block: ComponentConstructor<Props>, props: Props) {
    this._path = pathname;
    this._blockConstructor = block;
    this._block = null;
    this._props = props;
  }

  navigate(path: string): void {
    if (this.match(path)) {
      this._path = path;
      this.render();
    }
  }

  leave(): void {
    if (this._block) {
      this._block.hide();
    }
  }

  match(path: string): boolean {
    return path === this._path;
  }

  render(): void {
    this._block = new this._blockConstructor(this._props);
    renderDOM(this._block);
  }
}
