import { type Props } from '../../core';

export interface PersonaProps extends Props {
  id: number;
  image: string;
  name?: string;
  description?: string;
}
