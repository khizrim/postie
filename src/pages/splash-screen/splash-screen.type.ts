import type { LinkProps } from '../../components';

export interface SplashScreenProps {
  title: string;
  description: string;
  image: string;
  alt?: string;
  links: LinkProps[];
}
