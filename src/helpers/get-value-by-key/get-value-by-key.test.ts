import { expect } from 'chai';

import { getValueByKey } from './get-value-by-key';

describe('getValueByKey', () => {
  it('returns the value of the key when the object and key are provided', () => {
    const object = { key1: 'value1', key2: 'value2' };
    const result = getValueByKey(object, 'key1');
    expect(result).to.equal('value1');
  });

  it('returns undefined when the key does not exist in the object', () => {
    const object = { key1: 'value1', key2: 'value2' };
    const result = getValueByKey(object, 'key3' as keyof typeof object);
    expect(result).to.be.undefined;
  });

  it('returns undefined when the object is null', () => {
    const result = getValueByKey(null, 'key1' as keyof unknown);
    expect(result).to.be.undefined;
  });

  it('returns undefined when the object is undefined', () => {
    const result = getValueByKey(undefined, 'key1' as keyof unknown);
    expect(result).to.be.undefined;
  });
});
