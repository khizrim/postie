export type InputProps = {
  label?: string;
  autocomplete?: string;
  size?: string;
  style?: 'clear' | 'normal';
  errorMessage?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: Event) => void;
  required?: boolean;
} & Pick<HTMLInputElement, 'name' | 'placeholder' | 'type'>;
