import Handlebars from 'handlebars';
import { type HelperOptions } from 'handlebars';

import { type Block, type PropsType } from '../block';

type ComponentType<T extends PropsType> = new (props: T) => Block<T>;

export const registerComponent = <T extends PropsType>(name: string, Component: ComponentType<T>): void => {
  if (name in Handlebars.helpers) {
    throw new Error(`Component with name ${name} already exists`);
  }

  Handlebars.registerHelper(name, function (options: HelperOptions) {
    console.log('options', options.hash);

    return new Component(options.hash as T).render();
  });
};
