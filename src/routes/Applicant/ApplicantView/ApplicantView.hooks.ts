import { useEffect } from 'react';

import { Applicant } from '../../../core/api/applicants/applicants.types';

export const useInitialApplicantFetch = (getApplicants: () => Promise<Applicant[]>): void => {
  useEffect(() => {
    getApplicants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
