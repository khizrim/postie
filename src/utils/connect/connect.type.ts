import type { AppState } from 'src/index';

export type MapStateToProps = (state: AppState) => Partial<AppState>;
