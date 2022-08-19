import { renderHook } from '@testing-library/react';

import { useNus3 } from './useNus3';

describe('useNus3', () => {
  test('should remove event listener when unmount', () => {
    const addEventListenerMock = jest.spyOn(document, 'addEventListener');
    const removeEventListenerMock = jest.spyOn(document, 'removeEventListener');

    const { unmount } = renderHook(() => useNus3());
    expect(addEventListenerMock).toBeCalledWith('click', expect.any(Function));

    unmount();
    expect(removeEventListenerMock).toBeCalledWith(
      'click',
      expect.any(Function)
    );
  });
});
