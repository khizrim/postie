export type NullableElementType = HTMLElement | null;

export type PropsType = Record<string, unknown>;

export interface MetaType<T> {
  tagName: string;
  props: T;
}
