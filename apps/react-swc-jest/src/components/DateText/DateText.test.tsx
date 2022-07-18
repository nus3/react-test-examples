import { render } from '@testing-library/react';

import { DateText } from './DateText';

describe('DateText', () => {
  test('should render date', () => {
    const currentDate = '1991/08/02';
    jest.useFakeTimers().setSystemTime(new Date(currentDate).getTime());

    const { getByText } = render(<DateText />);
    expect(getByText(currentDate)).toBeInTheDocument();

    jest.useRealTimers();
  });
});
