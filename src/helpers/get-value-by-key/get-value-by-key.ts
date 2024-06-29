export const getValueByKey = <T, K extends keyof T>(object: T, key: K): T[K] | undefined => {
  if (object) {
    return object[key];
  }
};
