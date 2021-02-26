import { REST } from '../mock/backEnd.mock';
import { PathOptions } from '../types/api.types';

export const httpMock = {
  post: <T>(pathOptions: PathOptions, body: any): Promise<T> => REST(pathOptions, 'POST', body),
  get: <T>(pathOptions: PathOptions): Promise<T> => REST(pathOptions, 'GET'),
  put: <T>(pathOptions: PathOptions, body: any): Promise<T> => REST(pathOptions, 'PUT', body),
  delete: <T>(pathOptions: PathOptions): Promise<T> => REST(pathOptions, 'DELETE'),
};
