import Handlebars, { type Template } from 'handlebars';

import * as Components from 'src/components';

import { registerComponent } from 'src/core';
import * as Layouts from 'src/layouts';
import * as Partials from 'src/partials';

export const registerPartialsAndComponents = (): void => {
  const combinedPartialsAndLayouts = { ...Partials, ...Layouts };
  const combinedComponents = { ...Components };

  for (const [name, component] of Object.entries(combinedPartialsAndLayouts)) {
    Handlebars.registerPartial(name, component as Template);
  }

  for (const [name, component] of Object.entries(combinedComponents)) {
    registerComponent(name, component);
  }
};
