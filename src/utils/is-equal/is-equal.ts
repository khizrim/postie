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

export const isEqual = (lhs: PlainObject, rhs: PlainObject): boolean => {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];

    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
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
};
