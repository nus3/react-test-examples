import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

// REF: https://testing-library.com/docs/user-event/options#advancetimers
/**
 * helper of user-event setup
 */
export function userEventSetup(
  options: Parameters<typeof userEvent['setup']>[0] = {}
): ReturnType<typeof userEvent['setup']> {
  return userEvent.setup({
    advanceTimers: vi.advanceTimersByTime,
    ...options
  });
}
