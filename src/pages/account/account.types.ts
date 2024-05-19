import type { AvatarProps, ButtonProps, InputProps, LinkProps } from 'src/components';

import type { Props } from 'src/core/block';

export interface AccountPageProps extends Props {
  avatar: AvatarProps;
  user: {
    name: string;
    login: string;
  };
  inputs: InputProps[];
  actions: LinkProps[];
  signOutButton: ButtonProps;
  backButton: ButtonProps;
  isEditing?: boolean;
}
