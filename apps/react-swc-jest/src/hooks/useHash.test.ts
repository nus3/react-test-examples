import { renderHook, waitFor } from '@testing-library/react';

import { useHash } from './useHash';

describe('useHash', () => {
  beforeEach(() => {
    window.location.hash = '#hash';
  });

  test('should get url hash', async () => {
    const { result } = renderHook(() => useHash());
    expect(result.current.hash).toBe('#hash');

    window.location.hash = '#changedHash';

    await waitFor(() => expect(result.current.hash).toBe('#changedHash'));
  });

  test('should remove event listener when unmount', () => {
    const addEventListenerMock = jest.spyOn(window, 'addEventListener');
    const removeEventListenerMock = jest.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useHash());
    expect(addEventListenerMock).toBeCalledWith(
      'hashchange',
      expect.any(Function)
    );

    unmount();
    expect(removeEventListenerMock).toBeCalledWith(
      'hashchange',
      expect.any(Function)
    );
  });

  test('should update url hash', () => {
    const { result } = renderHook(() => useHash());

    result.current.updateHash('#updatedHash');

    expect(window.location.hash).toBe('#updatedHash');
  });
});
