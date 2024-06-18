import type {
  ButtonProps,
  InputComponent,
  InputProps,
  LinkComponent,
  LinkProps,
} from 'src/components';

import type { User } from 'src/api/user/user.type';
import type { Props, Refs } from 'src/core/block';

export interface AccountPageProps extends Props {
  user: User;
  inputs: InputProps[];
  edit: LinkProps;
  changePassword: LinkProps;
  signOut: LinkProps;
  backButton: ButtonProps;
  isEditingBlocked?: boolean;
}

export interface AccountPageRefs extends Refs {
  first_name: InputComponent;
  second_name: InputComponent;
  phone: InputComponent;
  email: InputComponent;
  login: InputComponent;
  display_name: InputComponent;
  edit: LinkComponent;
}
