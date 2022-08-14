import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { getExamples, GetExamplesResponse } from './example';

describe('/examples', () => {
  const server = setupServer();
  beforeAll(() => server.listen());
  beforeEach(() => {
    server.use(
      rest.get('/examples', async (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json<GetExamplesResponse>({
            examples: [
              { id: '1', name: 'nus1' },
              { id: '2', name: 'nus2' },
              { id: '3', name: 'nus3' }
            ]
          })
        );
      })
    );
  });

  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should called get examples api', async () => {
    const response = await getExamples();
    expect(response).toStrictEqual({
      examples: [
        { id: '1', name: 'nus1' },
        { id: '2', name: 'nus2' },
        { id: '3', name: 'nus3' }
      ]
    });
  });
});
