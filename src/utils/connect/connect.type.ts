import type { AppState } from 'src/index.ts';

export type MapStateToProps = (state: AppState) => Partial<AppState>;
