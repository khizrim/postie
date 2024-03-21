export type InputProps = {
  label?: string;
  autocomplete?: string;
  size?: string;
  style?: 'clear' | 'normal';
  value?: string;
  disabled?: boolean;
  onChange?: (event: Event) => void;
} & Pick<HTMLInputElement, 'name' | 'placeholder' | 'type' | 'required'>;
