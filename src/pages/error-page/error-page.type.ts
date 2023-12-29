import type { FlashMessageProps } from '../../components';

type ErrorCode = '404' | '500';

export interface ErrorPageProps {
  error: {
    title: ErrorCode;
  } & Omit<FlashMessageProps, 'title'>;
}
