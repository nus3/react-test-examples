import type { GetExamplesRequest, GetExamplesResponse } from "#src/api/example";
import { fn } from "@storybook/test";

export const getExamples = fn(async (_params?: GetExamplesRequest) => {
  const response: GetExamplesResponse = {
    examples: [
      { id: "1", name: "nus1" },
      { id: "2", name: "nus2" },
      { id: "3", name: "nus3" },
    ],
  };
  return response;
}).mockName("getExamples");
