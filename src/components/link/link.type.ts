import type { PropsType } from '../../core';

export interface LinkProps extends PropsType {
  text: string;
  href: string;
  target?: '_blank';
  isWarning?: boolean;
}
