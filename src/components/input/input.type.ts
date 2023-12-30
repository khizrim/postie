export type InputProps = {
  label?: string;
  autocomplete?: string;
  size?: string;
  style?: 'clear' | 'normal';
  value?: string;
  disabled?: boolean;
} & Pick<HTMLInputElement, 'name' | 'placeholder' | 'type'>;
