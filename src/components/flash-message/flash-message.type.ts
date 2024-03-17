import type { LinkComponent } from 'src/components/link';
import type { Props } from 'src/core/block';

export interface FlashMessageProps extends Props {
  title: string;
  description: string;
  image: string;
  alt?: string;
  link?: LinkComponent;
}
