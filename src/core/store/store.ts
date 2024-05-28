import { EventBus } from 'src/core';

export enum StoreEvents {
  Updated = 'Updated',
}

export class Store<State> extends EventBus {
  private state: Partial<State> = {};

  constructor(defaultState: State) {
    super();

    this.state = defaultState;
    this.on(StoreEvents.Updated, () => defaultState);
  }

  public getState(): Partial<State> {
    return this.state;
  }

  public set(nextState: Partial<State>): void {
    const prevState = { ...this.state };

    this.state = { ...this.state, ...nextState };

    this.emit(StoreEvents.Updated, prevState, nextState);
  }
}
