import { type PropsType } from '../../core';
import { type LinkComponent } from '../link';

export interface FlashMessageProps extends PropsType {
  title: string;
  description: string;
  image: string;
  alt?: string;
  link?: LinkComponent;
}
