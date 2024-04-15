import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, vi, expect } from 'vitest';

import { delayedResponse } from '../../../test/helpers/response';
import { userEventSetup } from '../../../test/helpers/userEventSetup';
import * as exampleApi from '../../api/example';
import { GetExamplesButton } from './GetExamplesButton';

describe('GetExamplesButton', () => {
  test('should called get examples api and view examples', async () => {
    render(<GetExamplesButton />);

    await userEvent.click(screen.getByRole('button'));
    expect(exampleApi.getExamples).toBeCalledTimes(1);

    // Since getExamples is mocked in jest.setup.ts, return value defined in __mocks__ file
    expect(screen.getAllByRole('listitem').length).toBe(3);
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('nus1');
    expect(screen.getAllByRole('listitem')[1]).toHaveTextContent('nus2');
    expect(screen.getAllByRole('listitem')[2]).toHaveTextContent('nus3');
  });

  test('should render loading', async () => {
    const user = userEventSetup();

    vi.useFakeTimers();

    vi.spyOn(exampleApi, 'getExamples').mockImplementation(() =>
      delayedResponse<exampleApi.GetExamplesResponse>(500, {
        examples: [
          { id: '1', name: 'nus1' },
          { id: '2', name: 'nus2' },
          { id: '3', name: 'nus3' }
        ]
      })
    );

    render(<GetExamplesButton />);
    await user.click(screen.getByRole('button'));

    await screen.findByTestId('Loading');
    act(() => {
      vi.advanceTimersByTime(500);
    });
    await waitFor(() => expect(screen.queryByTestId('Loading')).toBeNull());

    vi.runOnlyPendingTimers();
    vi.useFakeTimers();
  });
});
