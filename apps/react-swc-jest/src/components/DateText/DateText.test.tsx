import { render, screen } from '@testing-library/react';

import { DateText } from './DateText';

describe('DateText', () => {
  test('should render date', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('1991/08/02').getTime());

    render(<DateText />);
    expect(screen.getByText('1991/08/02')).toBeInTheDocument();

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
