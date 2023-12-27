export type InputProps = {
  size: string;
} & Pick<HTMLInputElement, 'placeholder' | 'type'>;
