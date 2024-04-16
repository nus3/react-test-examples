import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { DateText } from "./DateText";

describe("DateText", () => {
	test("should render date", () => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date("1991/08/02").getTime());

		render(<DateText />);
		expect(screen.getByText("1991/08/02")).toBeInTheDocument();

		vi.runOnlyPendingTimers();
		vi.useRealTimers();
	});
});
