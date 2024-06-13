import type { GetExamplesRequest, GetExamplesResponse } from "#src/api/example";

export const getExamples = async (_params?: GetExamplesRequest) => {
  const response: GetExamplesResponse = {
    examples: [
      { id: "1", name: "nus1" },
      { id: "2", name: "nus2" },
      { id: "3", name: "nus3" },
    ],
  };
  return response;
};
