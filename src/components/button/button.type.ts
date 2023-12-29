export type ButtonProps = {
  label: string;
  width: 'full' | 'content';
  style?: 'action' | 'flat';
  icon?: string;
  size?: string;
  link?: {
    text: string;
    href: string;
  };
} & Pick<HTMLButtonElement, 'type'>;
