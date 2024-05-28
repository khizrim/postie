import type { Props } from 'src/core/block';

export interface LinkProps extends Props {
  text: string;
  href?: string;
  onClick?: (event: Event) => void;
  target?: '_blank';
  isWarning?: boolean;
}
