import { type Props } from '../../core';
import { type LinkComponent } from '../link';

export interface FlashMessageProps extends Props {
  title: string;
  description: string;
  image: string;
  alt?: string;
  link?: LinkComponent;
}
