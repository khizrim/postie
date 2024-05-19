export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface Options {
  method: METHOD;
  headers?: Record<string, string>;
  data?: unknown;
}

export type OptionsWithoutMethod = Omit<Options, 'method'>;
