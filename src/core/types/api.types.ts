import { apiRoutes } from '../config/constants';

export interface EntityId {
  id: string;
}

export interface PathOptions {
  path: apiRoutes;
  params?: Record<string, any>;
}

export type FetchMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';
