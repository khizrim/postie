import type { Block, Props } from 'src/core/block';
import { ROOT_QUERY_SELECTOR } from 'src/utils/constants';

export const renderDOM = (block: Block<Props>): void => {
  const root = document.querySelector(ROOT_QUERY_SELECTOR);
  const blockElement = block.getContent();

  if (root && blockElement) {
    root.replaceChildren(blockElement);
  }
};
