import type { User } from 'src/api/auth/auth.type.ts';
import { Store } from 'src/core/store';
import { initApplication } from 'src/utils/init-application';
import { registerPartialsAndComponents } from 'src/utils/register-partials-and-components';

import './index.css';

export interface AppState {
  user: Nullable<User>;
}

window.store = new Store({
  user: null,
});

document.addEventListener('DOMContentLoaded', () => {
  registerPartialsAndComponents();

  initApplication().catch((error) => {
    console.error('Error initializing app:', error);
  });
});
