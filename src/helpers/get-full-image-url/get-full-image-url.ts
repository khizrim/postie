import { API_URL } from 'src/utils/constants.ts';

export const getFullImageUrl = (path: string): string => {
  return path.startsWith('http') ||
    path.startsWith('/src/assets') ||
    path.startsWith('/assets') ||
    path.startsWith('data:image')
    ? path
    : `${API_URL}/resources${path}`;
};
