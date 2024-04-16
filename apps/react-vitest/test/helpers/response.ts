export const delayedResponse = <T>(
  waitTime: number,
  response: T,
): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, waitTime);
  });
};
