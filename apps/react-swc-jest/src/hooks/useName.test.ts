import { renderHook } from '@testing-library/react';

import { useName } from './useName';

describe('useName', () => {
  test('should remove event listener when unmount', () => {
    const addEventListenerMock = jest.spyOn(document, 'addEventListener');
    const removeEventListenerMock = jest.spyOn(document, 'removeEventListener');

    const { unmount } = renderHook(() => useName());
    expect(addEventListenerMock).toBeCalledWith('click', expect.any(Function));

    unmount();
    expect(removeEventListenerMock).toBeCalledWith(
      'click',
      expect.any(Function)
    );
  });
});
