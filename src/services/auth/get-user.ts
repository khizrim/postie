import { authApi } from 'src/api/auth';
import { getResponseOrThrow } from 'src/utils/get-response-or-throw';

export const getUser = async (): Promise<void> => {
  const res = await authApi.getUser();
  window.store.set({ user: getResponseOrThrow(res) });
};
