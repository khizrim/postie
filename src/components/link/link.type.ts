import type { Props } from '../../core';

export interface LinkProps extends Props {
  text: string;
  href: string;
  target?: '_blank';
  isWarning?: boolean;
}
