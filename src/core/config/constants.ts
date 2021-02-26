// LOCAL STORAGE
export const LS = {
  LOCAL_APPLICANT_LIST: 'LOCAL_APPLICANT_LIST',
};

// API ROUTES
export enum apiRoutes {
  listApplicants = '/applicants', // GET
  createApplicant = '/applicants', // POST
  readApplicant = '/applicants/:id', // GET
  updateApplicant = '/applicants/:id', // PUT
  deleteApplicant = '/applicants/:id', // DELETE
}
