import Handlebars from 'handlebars';

Handlebars.registerHelper('getValueByKey', function <
  T,
  K extends keyof T,
>(object: T, key: K): T[K] {
  return object[key];
});
