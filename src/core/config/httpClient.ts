import { REST } from '../mock/backEnd.mock';
import { PathOptions } from '../types/api.types';

export const httpMock = {
  post: <T>(pathOptions: PathOptions, body: any): Promise<T> => REST<T>(pathOptions, 'POST', body),
  get: <T>(pathOptions: PathOptions): Promise<T> => REST<T>(pathOptions, 'GET'),
  put: <T>(pathOptions: PathOptions, body: any): Promise<T> => REST<T>(pathOptions, 'PUT', body),
  delete: <T>(pathOptions: PathOptions): Promise<T> => REST<T>(pathOptions, 'DELETE'),
};
