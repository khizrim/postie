import { expect } from 'chai';

import { getFullImageUrl } from 'src/helpers/get-full-image-url';
import { API_URL } from 'src/utils/constants';

describe('getFullImageUrl', () => {
  it('should return the same path when it starts with http', () => {
    const path = 'http://example.com/image.png';
    const result = getFullImageUrl(path);
    expect(result).to.equal(path);
  });

  it('should return the same path when it starts with /src/assets', () => {
    const path = '/src/assets/images/image.png';
    const result = getFullImageUrl(path);
    expect(result).to.equal(path);
  });

  it('should return the same path when it starts with /assets', () => {
    const path = '/assets/images/image.png';
    const result = getFullImageUrl(path);
    expect(result).to.equal(path);
  });

  it('should return the same path when it starts with data:image', () => {
    const path =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    const result = getFullImageUrl(path);
    expect(result).to.equal(path);
  });

  it('should prepend API_URL and /resources to the path when it does not start with http, /src/assets, /assets, or data:image', () => {
    const path = '/images/image.png';
    const result = getFullImageUrl(path);
    expect(result).to.equal(`${API_URL}/resources${path}`);
  });
});
