export type UserID = number;

export interface User {
  id: UserID;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  avatar: string;
  phone: string;
  email: string;
}

export interface Password {
  password: string;
}

export type UserSignIn = Pick<User, 'login'> & Password;

export type UserSignUp = Omit<User, 'avatar' | 'display_name' | 'id'> & Password;

export type UserLogin = Pick<User, 'login'>;

export type UserAvatar = Pick<User, 'avatar'>;

export type UserUpdate = Omit<User, 'avatar' | 'id'>;

export type UpdateAvatar = FormData;

export interface UpdatePassword {
  oldPassword: string;
  newPassword: string;
}
