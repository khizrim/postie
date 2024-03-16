import Handlebars from 'handlebars';

import { type ComponentConstructor, type HelperOptionsType } from './register-components.type.ts';
import { type Props } from '../block';

export const registerComponent = <T extends Props>(name: string, Component: ComponentConstructor<T>): void => {
  if (name in Handlebars.helpers) {
    throw new Error(`Component with name ${name} already exists`);
  }

  Handlebars.registerHelper(name, function (this: unknown, { hash, data, fn }: HelperOptionsType<T>) {
    const component = new Component(hash);

    const dataAttribute = `data-id="${component.id}"`;

    if ('ref' in hash && hash.ref !== undefined && component instanceof HTMLElement) {
      (data.root._refs = data.root.__refs ?? {})[hash.ref] = component;
    }

    (data.root.__children = data.root.__children ?? []).push({
      component,
      embed(fragment: DocumentFragment) {
        const stub = fragment.querySelector(`[${dataAttribute}]`);

        if (!stub) {
          return;
        }

        const content = component.getContent();

        if (!content) {
          return;
        }

        stub.replaceWith(content);
      },
    });

    const contents = fn ? fn(this) : '';

    return `<div ${dataAttribute}>${contents}</div>`;
  });
};
