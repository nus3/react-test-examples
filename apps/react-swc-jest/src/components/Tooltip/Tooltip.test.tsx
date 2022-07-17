import { composeStories } from '@storybook/testing-react';
import { act, render, within } from '@testing-library/react';

import { userEventSetup } from '../../../test/helpers/userEventSetup';
import { TOOLTIP_ANIMATION_TIME } from './Tooltip';
import * as TooltipStories from './Tooltip.stories';

const { Default } = composeStories(TooltipStories);

describe('Tooltip', () => {
  const tooltipContent = 'Tooltip text';

  test('should render tooltip', async () => {
    const { container, getByText } = render(<Default />);
    await Default.play({ canvasElement: container });
    expect(getByText(tooltipContent)).toBeInTheDocument();
  });

  test('should be showing animation', async () => {
    jest.useFakeTimers();

    const { container, getByRole } = render(<Default />);
    const tooltip = getByRole('alert');
    expect(tooltip.className).toMatch(/hide/);

    await Default.play({ canvasElement: container });
    expect(tooltip.className).toMatch(/showing/);

    act(() => {
      jest.advanceTimersByTime(TOOLTIP_ANIMATION_TIME);
    });
    expect(tooltip.className).toMatch(/show/);

    expect(jest.getTimerCount()).toBe(0);

    jest.useRealTimers();
  });

  test('should be hiding animation', async () => {
    jest.useFakeTimers();
    const user = userEventSetup();

    const { container, getByRole, queryByText } = render(<Default />);
    const tooltip = getByRole('alert');

    await Default.play({ canvasElement: container });
    act(() => {
      jest.advanceTimersByTime(TOOLTIP_ANIMATION_TIME);
    });

    const closeBtn = within(tooltip).getByRole('button');
    await user.click(closeBtn);

    expect(tooltip.className).toMatch(/hiding/);
    act(() => {
      jest.advanceTimersByTime(TOOLTIP_ANIMATION_TIME);
    });
    expect(tooltip.className).toMatch(/hide/);
    expect(queryByText(tooltipContent)).toBeNull();

    expect(jest.getTimerCount()).toBe(0);

    jest.useRealTimers();
  });
});
