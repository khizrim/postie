import type { Store } from 'src/core/store';
import type { AppState } from 'src/index.ts';

declare global {
  interface Window {
    store: Store<AppState>;
  }

  type Nullable<T> = T | null;

  declare module '*.hbs?raw' {
    const content: string;
    export default content;
  }

  declare module '*.png' {
    const content: string;
    export default content;
  }

  declare module '*.svg' {
    const content: string;
    export default content;
  }
}
