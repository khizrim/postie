import Handlebars from 'handlebars';

import type { HTMLElementProps } from 'src/core/block';
import type { ComponentConstructor, HelperOptionsType } from 'src/core/register-component';

export const registerComponent = <T extends HTMLElementProps>(
  name: string,
  Component: ComponentConstructor<T>,
): void => {
  if (name in Handlebars.helpers) {
    throw new Error(`Component with name ${name} already exists`);
  }

  Handlebars.registerHelper(
    name,
    function (this: unknown, { hash, data, fn }: HelperOptionsType<T>) {
      const component = new Component(hash);
      const dataAttribute = `data-id="${component.id}"`;

      const { ref } = hash;

      if (ref) {
        (data.root.__refs = data.root.__refs ?? {})[ref] = component;
      }

      (data.root.__children ??= []).push({
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
    },
  );
};
