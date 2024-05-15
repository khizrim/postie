import type { Template } from 'handlebars';
import Handlebars from 'handlebars';

import { navigate } from 'src/core/navigate';
import { registerComponent } from 'src/core/register-component';
import { registerCustomHelpers } from 'src/core/register-custom-helpers';
import { getValueByKey } from 'src/helpers/get-value-by-key';
import { isCurrentChat } from 'src/helpers/is-current-chat';

import * as Components from './components';
import * as Layouts from './layouts';
import * as Partials from './partials';

import './index.css';

export const customHelpers = {
  isCurrentChat,
  getValueByKey,
};

Object.entries({ ...Partials, ...Layouts }).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component as Template);
});

Object.entries({ ...Components }).forEach(([name, component]) => {
  registerComponent(name, component);
});

document.addEventListener('DOMContentLoaded', () => {
  registerCustomHelpers(customHelpers);
  navigate('sign-in');
});
