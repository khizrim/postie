import type { ButtonProps, InputProps, LinkProps } from 'src/components';

import type { Props } from 'src/core/block';

export interface AuthProps extends Props {
  title: string;
  description: string;
  inputs: InputProps[];
  button: ButtonProps;
  link: LinkProps;
  onSubmit: (event: Event) => void;
}
