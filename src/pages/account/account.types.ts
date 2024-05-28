import type {
  ButtonProps,
  InputComponent,
  InputProps,
  LinkComponent,
  LinkProps,
} from 'src/components';

import type { User } from 'src/api/auth/auth.type.ts';
import type { Props, Refs } from 'src/core/block';

export interface AccountPageProps extends Props {
  user: Nullable<User>;
  inputs: InputProps[];
  actions: LinkProps[];
  backButton: ButtonProps;
  isLocked?: boolean;
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
