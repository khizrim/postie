import { expect } from 'chai';
import sinon from 'sinon';

import { HttpTransport } from 'src/core/http-transport/http-transport';

import { METHOD, type Options } from './http-transport.type.ts';

describe('HttpTransport', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('Initialization', () => {
    it('should initialize with the correct baseURL', () => {
      const http = new HttpTransport('/api');
      expect(http).to.have.property('baseURL', '/api');
    });
  });

  describe('HTTP Methods', () => {
    it('calls the request with the correct data for GET', async () => {
      const http = new HttpTransport('/api');
      const requestStub = sinon.stub(http, 'request').resolves();
      const data = { userId: 1, limit: 25 };

      await http.get('/messages', data);

      const expectedUrl = '/api/messages';

      expect(requestStub.calledWithMatch(expectedUrl, { method: METHOD.GET, data })).to.be.true;
    });

    it('handles a successful GET request', async () => {
      const http = new HttpTransport('/api');
      const responseData: XMLHttpRequest = {
        response: 'response',
      } as XMLHttpRequest;
      sinon.stub(http, 'request').resolves(responseData);

      const result = await http.get('/data');

      expect(result).to.deep.equal(responseData);
    });

    it('sends correct headers for JSON data in a POST request', async () => {
      const http = new HttpTransport('/api');
      const requestStub = sinon.stub(http, 'request').resolves();

      await http.post('/submit', { value: 'some data' });

      expect(
        requestStub.calledWithMatch('/api/submit', {
          method: METHOD.POST,
          data: { value: 'some data' },
        }),
      ).to.be.true;
    });

    it('should make PUT request', async () => {
      const http = new HttpTransport('/api');
      const requestStub = sinon.stub(http, 'request').resolves();
      const data = { key: 'value' };

      await http.put('/test', data);

      expect(
        requestStub.calledWithMatch('/api/test', {
          method: METHOD.PUT,
          data,
        }),
      ).to.be.true;
    });

    it('should make PATCH request', async () => {
      const http = new HttpTransport('/api');
      const requestStub = sinon.stub(http, 'request').resolves();
      const data = { key: 'value' };

      await http.patch('/test', data);

      expect(
        requestStub.calledWithMatch('/api/test', {
          method: METHOD.PATCH,
          data,
        }),
      ).to.be.true;
    });

    it('should make DELETE request', async () => {
      const http = new HttpTransport('/api');
      const requestStub = sinon.stub(http, 'request').resolves();
      const data = { key: 'value' };

      await http.delete('/test', data);

      expect(
        requestStub.calledWithMatch('/api/test', {
          method: METHOD.DELETE,
          data,
        }),
      ).to.be.true;
    });
  });

  describe('Request Method', () => {
    it('should handle request with method not specified', async () => {
      const http = new HttpTransport('/api');
      sinon.stub(http, 'request').rejects(new Error('Method is not specified'));

      try {
        await http.request('/test', {} as Options<unknown>);
      } catch (error) {
        expect((error as Error).message).to.eq('Method is not specified');
      }
    });

    it('should handle network error', async () => {
      const http = new HttpTransport('/api');
      sinon.stub(http, 'request').rejects(new Error('Network Error'));

      try {
        await http.get('/test');
      } catch (error) {
        expect((error as Error).message).to.eq('Network Error');
      }
    });

    it('should send data as JSON if not FormData', async () => {
      const http = new HttpTransport('/api');
      const requestStub = sinon.stub(http, 'request').resolves();
      const data = { key: 'value' };

      await http.post('/test', data);

      expect(
        requestStub.calledWithMatch('/api/test', {
          method: METHOD.POST,
          data,
        }),
      ).to.be.true;
    });

    it('should send data as FormData if instance of FormData', async () => {
      const http = new HttpTransport('/api');
      const requestStub = sinon.stub(http, 'request').resolves();
      const data = new FormData();
      data.append('key', 'value');

      await http.post('/test', data);

      expect(
        requestStub.calledWithMatch('/api/test', {
          method: METHOD.POST,
          data,
        }),
      ).to.be.true;
    });
  });
});
