import type { LinkProps } from '../link';

export interface FlashMessageProps {
  title: string;
  description: string;
  image: string;
  alt?: string;
  link?: LinkProps;
}
