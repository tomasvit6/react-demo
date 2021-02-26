export const fakePromiseResolve = <T>(delay: number, value: T): Promise<T> => {
  return new Promise((resolve) => setTimeout(resolve, delay, value));
};

export const fakePromiseReject = <T>(delay: number, value: string): Promise<T> => {
  return new Promise((resolve, reject) => setTimeout(reject, delay, new Error(value)));
};
