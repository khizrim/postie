type PlainObject<T = unknown> = {
  [k in string]: T;
};

const isArray = (value: unknown): value is [] => Array.isArray(value);

const isPlainObject = (value: unknown): value is PlainObject =>
  typeof value === 'object' &&
  value !== null &&
  value.constructor === Object &&
  Object.prototype.toString.call(value) === '[object Object]';

const isArrayOrObject = (value: unknown): value is [] | PlainObject =>
  isPlainObject(value) || isArray(value);

export const isEqual = (lhs: PlainObject | unknown[], rhs: PlainObject | unknown[]): boolean => {
  if (isArray(lhs) && isArray(rhs)) {
    if (lhs.length !== rhs.length) {
      return false;
    }

    for (let i = 0; i < lhs.length; i++) {
      if (!isEqual(lhs[i], rhs[i])) {
        return false;
      }
    }

    return true;
  }

  if (isPlainObject(lhs) && isPlainObject(rhs)) {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
      return false;
    }

    for (const [key, value] of Object.entries(lhs)) {
      const rightValue = rhs[key];

      if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
        if (isEqual(value, rightValue)) {
          continue;
        }

        return false;
      }

      if (value !== rightValue) {
        return false;
      }
    }

    return true;
  }

  return lhs === rhs;
};
