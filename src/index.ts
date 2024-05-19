import { initApplication } from 'src/utils/init-application';
import { registerPartialsAndComponents } from 'src/utils/register-partials-and-components';

import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  registerPartialsAndComponents();

  initApplication().catch((error) => {
    console.error('Error initializing app:', error);
  });
});
