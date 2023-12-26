import type { LinkProps } from '../../components';

type ErrorCode = '404' | '500';

export interface ErrorPageProps {
  code: ErrorCode;
  description: string;
  image: string;
  link: LinkProps;
}
