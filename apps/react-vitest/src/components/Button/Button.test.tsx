import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, vi, expect } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  test('should render label', () => {
    render(<Button onClick={() => undefined}>label</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('label');
  });

  test('should call onClick', async () => {
    const onClickMock = vi.fn();
    render(<Button onClick={onClickMock}>label</Button>);
    await userEvent.click(screen.getByRole('button'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
