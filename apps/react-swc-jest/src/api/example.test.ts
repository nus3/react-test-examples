import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import {
  afterAll,
  afterEach,
  describe,
  test,
  vi,
  beforeAll,
  expect
} from 'vitest';

import { getExamples } from './example';

vi.unmock('./example');

const mockHandlers = [
  http.get('/examples', () => {
    return HttpResponse.json(
      {
        examples: [
          { id: '1', name: 'nus1' },
          { id: '2', name: 'nus2' },
          { id: '3', name: 'nus3' }
        ]
      },
      { status: 200 }
    );
  })
];

const server = setupServer(...mockHandlers);

describe('/examples', () => {
  beforeAll(() => server.listen());
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
