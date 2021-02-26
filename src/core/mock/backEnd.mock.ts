import { AddApplicantDto, UpdateApplicantDto } from '../api/applicants/applicants.types';
import { apiRoutes } from '../config/constants';
import { FetchMethods, PathOptions } from '../types/api.types';
import { fakePromiseReject } from '../utils/mock.utils';
import {
  addApplicant,
  getApplicant,
  getApplicants,
  removeApplicant,
  updateApplicant,
} from './controllers/applicant.controller';

export const REST = (path: PathOptions, method: FetchMethods, body = {}): Promise<any> => {
  // GET
  if (path.path === apiRoutes.listApplicants && method === 'GET') {
    return getApplicants();
  }

  // POST
  if (path.path === apiRoutes.createApplicant && method === 'POST') {
    return addApplicant(body as AddApplicantDto);
  }

  // GET
  if (path.path === apiRoutes.readApplicant && method === 'GET') {
    return getApplicant(path.params?.id);
  }

  // PUT
  if (path.path === apiRoutes.updateApplicant && method === 'PUT') {
    return updateApplicant(body as UpdateApplicantDto, path.params?.id);
  }

  // DELETE
  if (path.path === apiRoutes.deleteApplicant && method === 'DELETE') {
    return removeApplicant(path.params?.id);
  }

  return fakePromiseReject(1000, 'Unexpected error.');
};
