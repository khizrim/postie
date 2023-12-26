export type ButtonProps = {
  size: string;
  label: string;
  style: 'action' | 'flat';
  width: 'full' | 'content';
  link?: {
    text: string;
    href: string;
  };
} & Pick<HTMLButtonElement, 'type'>;
