import type { Props } from 'src/core/block';

export interface PersonaProps extends Props {
  id: number;
  image: string;
  name?: string;
  description?: string;
}
