import { ROOT_QUERY_SELECTOR } from '../../utils/constants';
import type { Block, Props } from '../block';

export const renderDOM = (block: Block<Props>): void => {
  const root = document.querySelector(ROOT_QUERY_SELECTOR);
  const blockElement = block.getContent();

  if (root && blockElement) {
    root.replaceChildren(blockElement);
  }
};
