export interface User {
  id: number;
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
