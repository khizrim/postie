export type InputProps = {
  label?: string;
  autocomplete?: string;
  ref?: string;
  size?: string;
  style?: 'clear' | 'normal';
  errorMessage?: string;
  value?: string;
  disabled?: boolean;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
  required?: boolean;
} & Pick<HTMLInputElement, 'name' | 'placeholder' | 'type'>;
