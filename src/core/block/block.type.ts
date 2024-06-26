import type { Block } from './block';

export type NullableElement = HTMLElement | null;
export type EventHandler = (event: Event) => void;
export type EventMap = Record<string, EventHandler>;

export type Props = Record<string, unknown> & { ref?: string };
export type HTMLElementProps = Props & HTMLElement;
export type BlockInstance = Block<Props, Refs>;
export type Refs = Record<string, BlockInstance>;

export type BlockChildren = BlockInstance[];

export type EmbedFunction = (fragment: DocumentFragment) => void;

export type ComponentContext = Props & {
  __refs?: Refs;
  __children?: Array<{
    component: BlockInstance;
    embed: EmbedFunction;
  }>;
};

export interface ComponentData {
  root: ComponentContext;
}

export interface ComponentMeta<T, R> {
  tagName: string;
  props: T;
  events?: EventMap;
  refs?: R;
  children?: BlockChildren;
}
