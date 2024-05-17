import type { Template } from 'handlebars';
import Handlebars from 'handlebars';

import { registerComponent } from 'src/core/register-component';
import { router } from 'src/core/router';

import * as Components from './components';
import * as Layouts from './layouts';
import * as Partials from './partials';

import './index.css';

const registerPartialsAndComponents = (): void => {
  const combinedPartialsAndLayouts = { ...Partials, ...Layouts };
  const combinedComponents = { ...Components };

  for (const [name, component] of Object.entries(combinedPartialsAndLayouts)) {
    Handlebars.registerPartial(name, component as Template);
  }

  for (const [name, component] of Object.entries(combinedComponents)) {
    registerComponent(name, component);
  }
};

const navigateToPage = (path: string): void => {
  try {
    const routeExists = router.getRoute(path);

    if (routeExists) {
      router.go(path);
    } else {
      router.go('/not-found');
    }
  } catch {
    router.go('/server-error');
  }
};

const initApplication = (): void => {
  navigateToPage(window.location.pathname);
};

document.addEventListener('DOMContentLoaded', () => {
  registerPartialsAndComponents();
  initApplication();
});
