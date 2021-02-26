import { object, string } from 'yup';

const shape = {
  name: string().required(),
  job: string().required(),
  email: string().email().required(),
};

export const schema = object<typeof shape>().shape(shape);
