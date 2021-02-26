import { RoutesConfiguration } from '../../core/types/router.types';
import { withSuspense } from '../../core/utils/transform.utils';

export enum applicantRoutePaths {
  applicantView = '/applicants',
  applicantAdd = '/applicants/add',
  applicantEdit = '/applicants/:id/edit',
}

const ApplicantView = withSuspense(() =>
  import('./ApplicantView/ApplicantView').then((module) => ({ default: module.ApplicantView })),
);
const ApplicantAdd = withSuspense(() =>
  import('./ApplicantAdd/ApplicantAdd').then((module) => ({ default: module.ApplicantAdd })),
);
const ApplicantEdit = withSuspense(() =>
  import('./ApplicantEdit/ApplicantEdit').then((module) => ({ default: module.ApplicantEdit })),
);

export const applicantRoutesConfig: RoutesConfiguration = [
  {
    path: applicantRoutePaths.applicantView,
    component: ApplicantView,
    exact: true,
  },
  {
    path: applicantRoutePaths.applicantAdd,
    component: ApplicantAdd,
  },
  {
    path: applicantRoutePaths.applicantEdit,
    component: ApplicantEdit,
  },
];
