import { type PropsType } from '../../core';

export interface PersonaProps extends PropsType {
  id: number;
  image: string;
  name?: string;
  description?: string;
}
