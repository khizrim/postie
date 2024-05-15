export const getValueByKey = <T, K extends keyof T>(object: T, key: K): T[K] => object[key];
