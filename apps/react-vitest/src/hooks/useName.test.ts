import { renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { useName } from "./useName";

describe("useName", () => {
	test("should remove event listener when unmount", () => {
		const addEventListenerMock = vi.spyOn(document, "addEventListener");
		const removeEventListenerMock = vi.spyOn(document, "removeEventListener");

		const { unmount } = renderHook(() => useName());
		expect(addEventListenerMock).toBeCalledWith("click", expect.any(Function));

		unmount();
		expect(removeEventListenerMock).toBeCalledWith(
			"click",
			expect.any(Function),
		);
	});
});
