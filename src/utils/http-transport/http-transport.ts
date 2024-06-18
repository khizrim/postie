import type { HTTPMethod, HTTPRequest } from './http-transport.type';
import { METHOD } from './http-transport.type';

export class HttpTransport {
  private readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get: HTTPMethod = async (path, data) =>
    await this.request(`${this.baseURL}${path}`, {
      method: METHOD.GET,
      data,
    });

  post: HTTPMethod = async (path, data) =>
    await this.request(`${this.baseURL}${path}`, {
      method: METHOD.POST,
      data,
    });

  put: HTTPMethod = async (path, data) =>
    await this.request(`${this.baseURL}${path}`, {
      method: METHOD.PUT,
      data,
    });

  patch: HTTPMethod = async (path, data) =>
    await this.request(`${this.baseURL}${path}`, {
      method: METHOD.PATCH,
      data,
    });

  delete: HTTPMethod = async (path, data) =>
    await this.request(`${this.baseURL}${path}`, {
      method: METHOD.DELETE,
      data,
    });

  request: HTTPRequest = async (url, options = { method: METHOD.GET }) =>
    await new Promise((resolve, reject) => {
      const { method, data } = options;

      if (!method) {
        reject(new Error('Method is not specified'));
      }

      const xhr = new XMLHttpRequest();

      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.withCredentials = true;

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          // TODO: Fix by adding a proper type for xhr
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          resolve(xhr);
        } else {
          reject(xhr);
        }
      };

      xhr.onerror = () => {
        reject(xhr);
      };

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data));
      }
    });
}
