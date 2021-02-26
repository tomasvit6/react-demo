import { apiRoutes } from '../../config/constants';
import { httpMock } from '../../config/httpClient';
import { EntityId } from '../../types/api.types';
import { AddApplicantDto, Applicant, UpdateApplicantDto } from './applicants.types';

export const list = async (): Promise<Applicant[]> => {
  try {
    const res = await httpMock.get<Applicant[]>({ path: apiRoutes.listApplicants });
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const add = async (data: AddApplicantDto): Promise<EntityId> => {
  try {
    const res = await httpMock.post<EntityId>({ path: apiRoutes.createApplicant }, data);
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const find = async (id: Applicant['id']): Promise<Applicant> => {
  try {
    const res = await httpMock.get<Applicant>({ path: apiRoutes.readApplicant, params: { id } });
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const update = async (id: Applicant['id'], data: UpdateApplicantDto): Promise<EntityId> => {
  try {
    const res = await httpMock.put<EntityId>({ path: apiRoutes.updateApplicant, params: { id } }, data);
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const remove = async (id: Applicant['id']): Promise<EntityId> => {
  try {
    const res = await httpMock.delete<EntityId>({ path: apiRoutes.deleteApplicant, params: { id } });
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
};
