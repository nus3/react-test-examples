import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button', () => {
  test('should render label', () => {
    const label = 'label';

    const { getByRole } = render(
      <Button onClick={() => undefined}>{label}</Button>
    );

    expect(getByRole('button')).toHaveTextContent(label);
  });

  test('should call onClick props', async () => {
    const onClickMock = jest.fn();

    const { getByRole } = render(<Button onClick={onClickMock}>label</Button>);
    await userEvent.click(getByRole('button'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
