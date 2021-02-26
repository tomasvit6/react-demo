import { NodeEnvEnum } from '../types/env.types';

export const config: Record<string, string | undefined> = {
  NODE_ENV: (process.env.NODE_ENV as NodeEnvEnum) || NodeEnvEnum.development,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  DEBUG: process.env.REACT_APP_DEBUG,
};
