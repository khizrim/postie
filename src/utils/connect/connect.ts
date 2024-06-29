import type { Block, Props, Refs } from 'src/core';
import { StoreEvents } from 'src/core/store';
import { isEqual } from 'src/helpers/is-equal';
import type { MapStateToProps } from 'src/utils/connect/connect.type';

export const connect = (mapStateToProps: MapStateToProps) => {
  return <P extends Props, R extends Refs>(Component: typeof Block<P, R>) => {
    return class extends Component {
      private readonly storeCallback: () => void;

      constructor(props: P, tagName: string = 'div') {
        const store = window.store;

        let state = mapStateToProps(store.getState());

        super({ ...props, ...state }, tagName);

        this.storeCallback = () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps(newState as P);
          }

          state = newState;
        };

        store.on(StoreEvents.Updated, this.storeCallback);
      }

      componentWillUnmount(): void {
        window.store.off(StoreEvents.Updated, this.storeCallback);
      }
    };
  };
};
