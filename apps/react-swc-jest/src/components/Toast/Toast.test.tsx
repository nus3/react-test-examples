import { composeStories } from '@storybook/testing-react';
import { act, render, screen } from '@testing-library/react';

import { userEventSetup } from '../../../test/helpers/userEventSetup';
import { AUTO_CLOSE_TIME, Toast, TOAST_ANIMATION_TIME } from './Toast';
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

  test('should be show and hide toast', async () => {
    const user = userEventSetup();

    render(<Toast>Hello nus3!</Toast>);
    expect(screen.queryByRole('alert')).toBeNull();

    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('alert')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(TOAST_ANIMATION_TIME + AUTO_CLOSE_TIME);
    });

    expect(screen.queryByRole('alert')).toBeNull();
  });

  test('should be show and hide toast in story', async () => {
    const { container } = render(<Default />);
    expect(screen.queryByRole('alert')).toBeNull();

    await Default.play({ canvasElement: container });
    expect(screen.getByRole('alert')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(TOAST_ANIMATION_TIME + AUTO_CLOSE_TIME);
    });

    expect(screen.queryByRole('alert')).toBeNull();
  });
});
