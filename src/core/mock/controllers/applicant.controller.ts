import faker from 'faker';
import { get, set } from 'local-storage';

import { AddApplicantDto, Applicant, UpdateApplicantDto } from '../../api/applicants/applicants.types';
import { LS } from '../../config/constants';
import { fakePromiseReject, fakePromiseResolve } from '../../utils/mock.utils';

export const removeApplicant = <T>(id: string): Promise<T> => {
  const applicants = getLocalApplicantList();
  const updatedApplicants = applicants.filter((applicant) => applicant.id !== id);

  if (applicants.length === updatedApplicants.length) {
    return fakePromiseReject(1000, 'Applicant not found!' as any);
  }

  updateLocalApplicantList(updatedApplicants);

  return fakePromiseResolve<T>(500, id as any);
};

export const updateApplicant = <T>(data: UpdateApplicantDto, id: string): Promise<T> => {
  const applicants = getLocalApplicantList();
  const updatedApplicants = applicants.map((applicant) => {
    return applicant.id === id
      ? {
          ...data,
          id: applicant.id,
          createdAt: applicant.createdAt,
          updatedAt: new Date().toDateString(),
        }
      : applicant;
  });

  updateLocalApplicantList(updatedApplicants);

  return fakePromiseResolve<T>(1000, id as any);
};

export const getApplicant = <T>(id: string): Promise<T> => {
  const applicants = getLocalApplicantList();
  const applicant = applicants.find((applicant) => applicant.id === id);

  if (!applicant) {
    return fakePromiseReject(1000, 'Applicant not found!' as any);
  }

  return fakePromiseResolve<T>(1000, applicant as any);
};

export const getApplicants = <T>(): Promise<T> => {
  return fakePromiseResolve<T>(1000, getLocalApplicantList() as any);
};

export const addApplicant = <T>(data: AddApplicantDto): Promise<T> => {
  const applicants = getLocalApplicantList();
  const foundApplicant = applicants.find((applicant) => applicant.email === data.email);

  if (foundApplicant) {
    return fakePromiseReject(1000, 'Applicant with this email already exists!' as any);
  }

  const newApplicant: Applicant = {
    id: faker.random.uuid(),
    ...data,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  };
  const updatedApplicants = [...applicants, newApplicant];

  updateLocalApplicantList(updatedApplicants);

  return fakePromiseResolve<T>(1000, newApplicant as any);
};

export const makeFakeApplicantList = (): Applicant[] => {
  faker.seed(123); // Using seed to return same results

  return Array(18)
    .fill({})
    .map(
      (val, idx) =>
        ({
          id: faker.random.uuid(),
          name: faker.name.findName(),
          job: faker.name.jobTitle(),
          email: faker.internet.email(),
          createdAt: faker.date.between('2019-01-01', '2020-01-01').toDateString(),
          updatedAt: faker.date.between('2020-01-01', '2021-01-01').toDateString(),
        } as Applicant),
    );
};

export const getLocalApplicantList = (): Applicant[] => {
  let localData = get<Applicant[]>(LS.LOCAL_APPLICANT_LIST);

  if (!localData) {
    localData = makeFakeApplicantList();
    set<Applicant[]>(LS.LOCAL_APPLICANT_LIST, localData);
  }

  return localData;
};

export const updateLocalApplicantList = (newApplicantList: Applicant[]): void => {
  set<Applicant[]>(LS.LOCAL_APPLICANT_LIST, newApplicantList);
};
