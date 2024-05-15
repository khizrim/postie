import Handlebars from 'handlebars';

export const registerCustomHelpers = (helpers: Record<string, Handlebars.HelperDelegate>): void => {
  Object.entries(helpers).forEach(([name, helper]) => {
    Handlebars.registerHelper(name, helper);
  });
};
