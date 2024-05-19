import type { Options } from './http-transport.type';
import { METHOD } from './http-transport.type';

export class HttpTransport {
  private readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path: string, data?: unknown): Promise<XMLHttpRequest> {
    return await this.request(`${this.baseURL}${path}`, {
      method: METHOD.GET,
      data,
    });
  }

  async post(path: string, data?: unknown): Promise<XMLHttpRequest> {
    return await this.request(`${this.baseURL}${path}`, {
      method: METHOD.POST,
      data,
    });
  }

  async put(path: string, data?: unknown): Promise<XMLHttpRequest> {
    return await this.request(`${this.baseURL}${path}`, {
      method: METHOD.PUT,
      data,
    });
  }

  async patch(path: string, data?: unknown): Promise<XMLHttpRequest> {
    return await this.request(`${this.baseURL}${path}`, {
      method: METHOD.PATCH,
      data,
    });
  }

  async delete(path: string, data?: unknown): Promise<XMLHttpRequest> {
    return await this.request(`${this.baseURL}${path}`, {
      method: METHOD.DELETE,
      data,
    });
  }

  async request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
    return await new Promise((resolve, reject) => {
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
}
