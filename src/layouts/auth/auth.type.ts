import type { ButtonProps, InputProps, LinkProps } from '../../components';

export interface AuthProps {
  logo: string;
  title: string;
  description: string;
  inputs: InputProps[];
  button: ButtonProps;
  link: LinkProps;
}
