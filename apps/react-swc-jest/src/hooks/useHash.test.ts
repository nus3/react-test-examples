import { renderHook, waitFor } from '@testing-library/react';

import { useHash } from './useHash';

describe('useHash', () => {
  const hashMock = 'hashMock';

  beforeEach(() => {
    window.location.hash = hashMock;
  });

  test('should get url hash', async () => {
    const { result } = renderHook(() => useHash());
    expect(result.current.hash).toBe(`#${hashMock}`);

    const changedHash = 'changedHash';
    window.location.hash = changedHash;

    await waitFor(() => {
      expect(result.current.hash).toBe(`#${changedHash}`);
    });
  });

  test('should remove event listener when unmount', () => {
    const addEventListenerMock = jest.spyOn(window, 'addEventListener');
    const removeEventListenerMock = jest.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useHash());
    expect(addEventListenerMock).toHaveBeenCalled();

    unmount();
    expect(removeEventListenerMock).toHaveBeenCalled();
  });

  test('should update url hash', () => {
    const { result } = renderHook(() => useHash());

    const updatedHash = 'updatedHash';
    result.current.updateHash(updatedHash);

    expect(window.location.hash).toBe(`#${updatedHash}`);
  });
});
