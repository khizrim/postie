import { type PropsType } from '../../core';

export interface AvatarProps extends PropsType {
  image: string;
  isCurrentUser?: boolean;
}
