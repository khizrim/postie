export const nameValidator = (name: string): boolean => {
  const nameRegex = /^([A-ZА-Я][a-zа-я-]*)$/;
  return nameRegex.test(name);
};
