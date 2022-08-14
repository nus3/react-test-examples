import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getExamples } from '../../api/example';
import { GetExamplesButton } from './GetExamplesButton';

describe('GetExamplesButton', () => {
  test('should called get examples api and view examples', async () => {
    render(<GetExamplesButton />);

    await userEvent.click(screen.getByRole('button'));
    expect(getExamples).toBeCalledTimes(1);

    // Since getExamples is mocked in jest.setup.ts, return value defined in __mocks__ file
    expect(screen.getAllByRole('listitem').length).toBe(3);
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('nus1');
    expect(screen.getAllByRole('listitem')[1]).toHaveTextContent('nus2');
    expect(screen.getAllByRole('listitem')[2]).toHaveTextContent('nus3');
  });
});
