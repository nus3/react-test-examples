import { act, renderHook } from '@testing-library/react';

import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('should add count', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.addCount();
    });
    expect(result.current.count).toBe(1);
  });
});
