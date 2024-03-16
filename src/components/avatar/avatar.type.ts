import { type Props } from '../../core';

export interface AvatarProps extends Props {
  image: string;
  isCurrentUser?: boolean;
}
