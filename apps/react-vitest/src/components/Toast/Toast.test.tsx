import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { userEventSetup } from "../../../test/helpers/userEventSetup";
import { AUTO_CLOSE_TIME, TOAST_ANIMATION_TIME, Toast } from "./Toast";

describe("Toast", () => {
	beforeEach(() => {
		vi.useFakeTimers({ shouldAdvanceTime: true });
	});

	afterEach(() => {
		vi.runOnlyPendingTimers();
		vi.useRealTimers();
	});

	test("should be show and hide toast", async () => {
		const user = userEventSetup();

		render(<Toast>Hello nus3!</Toast>);
		expect(screen.queryByRole("alert")).toBeNull();

		await user.click(screen.getByRole("button"));
		expect(screen.getByRole("alert")).toBeInTheDocument();

		act(() => {
			vi.advanceTimersByTime(TOAST_ANIMATION_TIME + AUTO_CLOSE_TIME);
		});

		expect(screen.queryByRole("alert")).toBeNull();
	});
});
