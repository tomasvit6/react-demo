import { InferType } from 'yup';

import { schema } from './ApplicantForm.schema';

export type ApplicantFormValues = InferType<typeof schema>;
