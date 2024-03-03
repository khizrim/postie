import { ROOT_QUERY_SELECTOR } from '../../utils/constants';
import type { Block, PropsType } from '../block';

export const renderDOM = (block: Block<PropsType>): void => {
  const root = document.querySelector(ROOT_QUERY_SELECTOR);
  const blockElement = block.getContent();

  if (root !== null && blockElement !== null) {
    root.innerHTML = '';
    root.appendChild(blockElement);
  }
};
