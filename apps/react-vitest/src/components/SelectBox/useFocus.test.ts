import { act, renderHook } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { SELECT_BOX_VALUES } from './SelectBox';
import { useFocus } from './useFocus';

describe('useFocus', () => {
  test('should be default focused value is 0', () => {
    const { result } = renderHook(() => useFocus(SELECT_BOX_VALUES));
    expect(result.current.focusedValue).toBe(0);
  });

  test('should update focusedValue when use moveFocus', () => {
    const { result } = renderHook(() => useFocus(SELECT_BOX_VALUES));
    expect(result.current.focusedValue).toBe(0);

    act(() => {
      result.current.moveFocus('positive');
    });
    expect(result.current.focusedValue).toBe(1);
    act(() => {
      result.current.moveFocus('positive');
    });
    expect(result.current.focusedValue).toBe(2);
    act(() => {
      result.current.moveFocus('positive');
    });
    expect(result.current.focusedValue).toBe(3);
    act(() => {
      result.current.moveFocus('positive');
    });
    expect(result.current.focusedValue).toBe(0);

    act(() => {
      result.current.moveFocus('negative');
    });
    expect(result.current.focusedValue).toBe(3);
    act(() => {
      result.current.moveFocus('negative');
    });
    expect(result.current.focusedValue).toBe(2);
    act(() => {
      result.current.moveFocus('negative');
    });
    expect(result.current.focusedValue).toBe(1);
    act(() => {
      result.current.moveFocus('negative');
    });
    expect(result.current.focusedValue).toBe(0);
    act(() => {
      result.current.moveFocus('negative');
    });
    expect(result.current.focusedValue).toBe(3);
  });
});
