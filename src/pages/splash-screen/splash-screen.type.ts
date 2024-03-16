import type { FlashMessageProps, LinkProps } from 'src/components';

import type { Props } from 'src/core';

export interface SplashScreenProps extends Props {
  content: FlashMessageProps;
  links: LinkProps[];
}
