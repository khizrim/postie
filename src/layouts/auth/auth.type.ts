import type { ButtonProps, InputProps, LinkProps } from '../../components';
import { type Props } from '../../core';

export interface AuthProps extends Props {
  title: string;
  description: string;
  inputs: InputProps[];
  button: ButtonProps;
  link: LinkProps;
  onSubmit: (event: Event) => void;
}
