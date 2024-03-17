import type { Props } from 'src/core/block';

export interface AvatarProps extends Props {
  image: string;
  isCurrentUser?: boolean;
}
