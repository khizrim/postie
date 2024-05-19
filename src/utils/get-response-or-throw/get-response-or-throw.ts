export const getResponseOrThrow = <T>(response: XMLHttpRequest): T => {
  if (response.status >= 200 && response.status < 300 && response.response) {
    return JSON.parse(response.response as string) as T;
  }

  throw new Error(response.statusText);
};
