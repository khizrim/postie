import type { Block, Props, Refs } from 'src/core';
import { StoreEvents } from 'src/core/store';
import type { MapStateToProps } from 'src/utils/connect/connect.type';
import { isEqual } from 'src/utils/is-equal';

export const connect = (mapStateToProps: MapStateToProps) => {
  return <P extends Props, R extends Refs>(Component: typeof Block<P, R>) => {
    return class extends Component {
      constructor(props: P, tagName: string = 'div') {
        const store = window.store;

        let state = mapStateToProps(store.getState());

        super({ ...props, ...state }, tagName);

        console.log('Connected component:', this._meta.props);

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps(newState as P);
            state = newState;
          }
        });
      }
    };
  };
};
