import type { AvatarProps, ButtonProps, InputProps, LinkProps } from '../../components';

export interface AccountPageProps {
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
