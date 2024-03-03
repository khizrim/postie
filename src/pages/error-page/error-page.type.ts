import type { FlashMessageProps } from 'src/components/flash-message';
import type { PropsType } from 'src/core';

type ErrorCode = '404' | '500';

export interface ErrorPageProps extends PropsType {
  error: {
    title: ErrorCode;
  } & Omit<FlashMessageProps, 'title'>;
}
