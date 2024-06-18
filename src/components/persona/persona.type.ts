import type { User } from 'src/api/user/user.type';

export type PersonaProps = Pick<User, 'id' | 'display_name' | 'avatar'> & {
  onClick?: () => void;
};
