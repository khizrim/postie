import { expect } from 'chai';

import { isEqual } from './is-equal';

describe('isEqual', () => {
  it('should return true for two empty objects', () => {
    expect(isEqual({}, {})).equal(true);
  });

  it('should return true for two identical objects', () => {
    const obj = { a: 1, b: 2, c: { d: 3 } };
    expect(isEqual(obj, obj)).equal(true);
  });

  it('should return false for two different objects', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 2, c: { d: 4 } };
    expect(isEqual(obj1, obj2)).equal(false);
  });

  it('should return false for objects with different number of keys', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2 };
    expect(isEqual(obj1, obj2)).equal(false);
  });

  it('should return true for two identical arrays', () => {
    const arr = [1, 2, 3];
    expect(isEqual(arr, [...arr])).equal(true);
  });

  it('should return false for two different arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(isEqual(arr1, arr2)).equal(false);
  });

  it('should return false for array and object', () => {
    const arr = [1, 2, 3];
    const obj = { a: 1, b: 2, c: 3 };
    expect(isEqual(arr, obj)).equal(false);
  });
});
