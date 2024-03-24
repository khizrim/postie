import type { Template } from 'handlebars';
import Handlebars from 'handlebars';

import { navigate } from 'src/core/navigate';
import { registerComponent } from 'src/core/register-component';
import 'src/helpers/get-value-by-key';
import 'src/helpers/is-current-chat';

import * as Components from './components';
import * as Layouts from './layouts';
import * as Partials from './partials';

import './index.css';

Object.entries({ ...Partials, ...Layouts }).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component as Template);
});

Object.entries({ ...Components }).forEach(([name, component]) => {
  registerComponent(name, component);
});

document.addEventListener('DOMContentLoaded', () => {
  navigate('sign-in');
});
