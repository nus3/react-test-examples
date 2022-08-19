import { composeStories } from '@storybook/testing-react';
import { act, render, within, screen } from '@testing-library/react';

import { userEventSetup } from '../../../test/helpers/userEventSetup';
import { TOAST_ANIMATION_TIME } from './Toast';
import * as ToastStories from './Toast.stories';

const { Default } = composeStories(ToastStories);

describe('Toast', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should be showing animation', async () => {
    const { container } = render(<Default />);
    const toast = screen.getByRole('alert');
    expect(toast.className).toMatch(/hide/);

    await Default.play({ canvasElement: container });
    expect(toast.className).toMatch(/showing/);

    act(() => {
      jest.advanceTimersByTime(TOAST_ANIMATION_TIME);
    });
    expect(toast.className).toMatch(/show/);
  });

  test('should be hiding animation', async () => {
    const user = userEventSetup();

    const { container } = render(<Default />);
    const toast = screen.getByRole('alert');

    await Default.play({ canvasElement: container });
    act(() => {
      jest.advanceTimersByTime(TOAST_ANIMATION_TIME);
    });

    const closeBtn = within(toast).getByRole('button');
    await user.click(closeBtn);

    expect(toast.className).toMatch(/hiding/);
    act(() => {
      jest.advanceTimersByTime(TOAST_ANIMATION_TIME);
    });
    expect(toast.className).toMatch(/hide/);
    expect(screen.queryByText('Toast text')).toBeNull();
  });
});
