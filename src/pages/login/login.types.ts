import type { ButtonProps, InputProps, LinkProps } from '../../components';

export interface LoginPageProps {
  logo: string;
  title: string;
  description: string;
  inputs: InputProps[];
  button: ButtonProps;
  link: LinkProps;
}
