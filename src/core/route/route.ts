import type { BlockInstance, ComponentConstructor, Props } from 'src/core';
import { renderDOM } from 'src/core';
import { registerCustomHelpers } from 'src/core/register-custom-helpers';
import { getChatData } from 'src/helpers/get-chat-data';
import { getDefaultAvatar } from 'src/helpers/get-default-avatar';
import { getFullImageUrl } from 'src/helpers/get-full-image-url';
import { getValueByKey } from 'src/helpers/get-value-by-key';
import { isCurrentChat } from 'src/helpers/is-current-chat';
import type { PagePropsMap } from 'src/pages';

export class Route {
  private _path: string;
  private readonly _blockConstructor: ComponentConstructor<PagePropsMap[keyof PagePropsMap]>;
  private _block: BlockInstance | null;
  private readonly _props: Props;

  constructor(
    pathname: string,
    block: ComponentConstructor<PagePropsMap[keyof PagePropsMap]>,
    props: Props,
  ) {
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
    registerCustomHelpers({
      isCurrentChat,
      getValueByKey,
      getChatData,
      getDefaultAvatar,
      getFullImageUrl,
    });

    if (typeof this._blockConstructor === 'function') {
      this._block = new this._blockConstructor(this._props as PagePropsMap[keyof PagePropsMap]);

      renderDOM(this._block);
    } else {
      throw new Error('_blockConstructor is not a constructor');
    }
  }
}
