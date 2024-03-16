import type { FlashMessageProps } from 'src/components/flash-message';
import type { Props } from 'src/core';

type ErrorCode = '404' | '500';

export interface ErrorPageProps extends Props {
  error: {
    title: ErrorCode;
  } & Omit<FlashMessageProps, 'title'>;
}
