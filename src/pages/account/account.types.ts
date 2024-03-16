import type { AvatarProps, ButtonProps, InputProps, LinkProps } from '../../components';
import { type Props } from '../../core';

export interface AccountPageProps extends Props {
  avatar: AvatarProps;
  user: {
    name: string;
    login: string;
  };
  inputs: InputProps[];
  actions: LinkProps[];
  backButton: ButtonProps;
  isEditing?: boolean;
}
