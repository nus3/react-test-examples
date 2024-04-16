import { vi } from 'vitest';

import * as exampleApi from '../example';

export const getExamples: typeof exampleApi.getExamples = vi.fn(async () => {
  const res: exampleApi.GetExamplesResponse = await {
    examples: [
      { id: '1', name: 'nus1' },
      { id: '2', name: 'nus2' },
      { id: '3', name: 'nus3' }
    ]
  };
  return res;
});
