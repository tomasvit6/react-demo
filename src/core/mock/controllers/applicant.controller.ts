import faker from 'faker';
import { get, set } from 'local-storage';

import { AddApplicantDto, Applicant, UpdateApplicantDto } from '../../api/applicants/applicants.types';
import { LS } from '../../config/constants';
import { fakePromiseReject, fakePromiseResolve } from '../../utils/mock.utils';

export const removeApplicant = (id: string): Promise<string> => {
  const applicants = getLocalApplicantList();
  const updatedApplicants = applicants.filter((applicant) => applicant.id !== id);

  if (applicants.length === updatedApplicants.length) {
    return fakePromiseReject(1000, 'Applicant not found!');
  }

  updateLocalApplicantList(updatedApplicants);

  return fakePromiseResolve(500, id);
};

export const updateApplicant = (data: UpdateApplicantDto, id: string): Promise<string> => {
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

  return fakePromiseResolve(1000, id);
};

export const getApplicant = (id: string): Promise<Applicant | string> => {
  const applicants = getLocalApplicantList();
  const applicant = applicants.find((applicant) => applicant.id === id);

  if (!applicant) {
    return fakePromiseReject<string>(1000, 'Applicant not found!');
  }

  return fakePromiseResolve(1000, applicant);
};

export const getApplicants = (): Promise<Applicant[]> => {
  return fakePromiseResolve(1000, getLocalApplicantList());
};

export const addApplicant = (data: AddApplicantDto): Promise<Applicant | string> => {
  const applicants = getLocalApplicantList();
  const foundApplicant = applicants.find((applicant) => applicant.email === data.email);

  if (foundApplicant) {
    return fakePromiseReject<string>(1000, 'Applicant with this email already exists!');
  }

  const newApplicant: Applicant = {
    id: faker.random.uuid(),
    ...data,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  };
  const updatedApplicants = [...applicants, newApplicant];

  updateLocalApplicantList(updatedApplicants);

  return fakePromiseResolve(1000, newApplicant);
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
