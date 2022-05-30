import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('should render label', () => {
    const label = 'label';

    const { getByText } = render(
      <Button onClick={() => undefined}>{label}</Button>
    );

    expect(getByText(label)).toBeInTheDocument();
  });
});
