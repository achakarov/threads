import { Thread } from '../models/Thread';

import { BASE_URL } from '../utils/constants/api-constants';
import { fetchJson } from '../utils/helpers/https';

export const getThreads = async (): Promise<Thread[][]> => {
  return fetchJson(BASE_URL);
};
