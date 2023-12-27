export type InputProps = {
  size: string;
  autocomplete?: string | undefined;
} & Pick<HTMLInputElement, 'name' | 'placeholder' | 'type'>;
