export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface Options<D> {
  method: METHOD;
  headers?: Record<string, string>;
  data?: D;
}

export type HTTPMethod = <D = XMLHttpRequest>(path: string, data?: D) => Promise<XMLHttpRequest>;

export type HTTPRequest = <D = Record<string, unknown>>(
  url: string,
  options: Options<D>,
) => Promise<XMLHttpRequest>;
