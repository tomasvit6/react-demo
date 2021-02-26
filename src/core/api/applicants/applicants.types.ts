export interface AddApplicantDto {
  name: IApplicant['name'];
  job: IApplicant['job'];
  email: IApplicant['email'];
}

export interface UpdateApplicantDto {
  name: IApplicant['name'];
  job: IApplicant['job'];
  email: IApplicant['email'];
}

export class Applicant {
  id: IApplicant['id'];
  name: IApplicant['name'];
  job: IApplicant['job'];
  email: IApplicant['email'];
  createdAt: IApplicant['createdAt'];
  updatedAt: IApplicant['updatedAt'];

  constructor(initialValues?: IApplicant) {
    this.id = initialValues?.id ?? '';
    this.name = initialValues?.name ?? '';
    this.job = initialValues?.job ?? '';
    this.email = initialValues?.email ?? '';
    this.createdAt = initialValues?.createdAt ?? '';
    this.updatedAt = initialValues?.updatedAt ?? '';
  }
}

interface IApplicant {
  id: string;
  name: string;
  job: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
