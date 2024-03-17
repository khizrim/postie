import type { BlockInstance, ComponentData, Props } from 'src/core/block';

export type ComponentConstructor<T extends Props> = new (props: T) => BlockInstance;
type StringFunction = (p: unknown) => string;

export interface HelperOptionsType<T extends Props> {
  hash: T;
  data: ComponentData;
  fn?: StringFunction;
}
