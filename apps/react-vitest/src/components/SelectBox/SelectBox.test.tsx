import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { SelectBox } from "./SelectBox";

describe("SelectBox", () => {
	test("should focus move to right cell with right key", async () => {
		render(<SelectBox onClick={() => undefined} />);

		const cells = screen.getAllByRole("gridcell");
		expect(cells.length).toBe(4);

		const firstCellBtn = within(cells[0]).getByRole("button");
		expect(firstCellBtn).toHaveFocus();

		const secondCellBtn = within(cells[1]).getByRole("button");
		expect(secondCellBtn).not.toHaveFocus();

		await userEvent.keyboard("{ArrowRight}");
		expect(secondCellBtn).toHaveFocus();

		expect(screen.getByRole("grid")).toHaveAttribute(
			"aria-activedescendant",
			"selectBoxCell_1",
		);
	});

	test("should focus move to last cell with left key when first cell focused", async () => {
		render(<SelectBox onClick={() => undefined} />);

		const cells = screen.getAllByRole("gridcell");

		const firstCellBtn = within(cells[0]).getByRole("button");
		expect(firstCellBtn).toHaveFocus();

		const lastCellBtn = within(cells[3]).getByRole("button");
		expect(lastCellBtn).not.toHaveFocus();

		await userEvent.keyboard("{ArrowLeft}");
		expect(lastCellBtn).toHaveFocus();
		expect(screen.getByRole("grid")).toHaveAttribute(
			"aria-activedescendant",
			"selectBoxCell_3",
		);
	});

	test("should focus move to first cell with right key when last cell focused", async () => {
		render(<SelectBox onClick={() => undefined} defaultValue={3} />);

		const cells = screen.getAllByRole("gridcell");

		const firstCellBtn = within(cells[0]).getByRole("button");
		expect(firstCellBtn).not.toHaveFocus();

		const lastCellBtn = within(cells[3]).getByRole("button");
		expect(lastCellBtn).toHaveFocus();

		await userEvent.keyboard("{ArrowRight}");
		expect(firstCellBtn).toHaveFocus();
		expect(screen.getByRole("grid")).toHaveAttribute(
			"aria-activedescendant",
			"selectBoxCell_0",
		);
	});

	test("should focus move to last cell with right key when right key press 3times", async () => {
		render(<SelectBox onClick={() => undefined} />);

		const cells = screen.getAllByRole("gridcell");

		const firstCellBtn = within(cells[0]).getByRole("button");
		expect(firstCellBtn).toHaveFocus();

		const lastCellBtn = within(cells[3]).getByRole("button");
		expect(lastCellBtn).not.toHaveFocus();

		await userEvent.keyboard(`{ArrowRight>3/}`);
		expect(lastCellBtn).toHaveFocus();
		expect(screen.getByRole("grid")).toHaveAttribute(
			"aria-activedescendant",
			"selectBoxCell_3",
		);
	});

	test("should focus move to first cell with left key when left key press 3times", async () => {
		render(<SelectBox onClick={() => undefined} defaultValue={3} />);

		const cells = screen.getAllByRole("gridcell");

		const firstCellBtn = within(cells[0]).getByRole("button");
		expect(firstCellBtn).not.toHaveFocus();

		const lastCellBtn = within(cells[3]).getByRole("button");
		expect(lastCellBtn).toHaveFocus();

		await userEvent.keyboard(`{ArrowLeft>3/}`);
		expect(firstCellBtn).toHaveFocus();
		expect(screen.getByRole("grid")).toHaveAttribute(
			"aria-activedescendant",
			"selectBoxCell_0",
		);
	});

	test("should focus move to first cell with left key when left key press 3times", async () => {
		render(<SelectBox onClick={() => undefined} defaultValue={3} />);

		const cells = screen.getAllByRole("gridcell");

		const firstCellBtn = within(cells[0]).getByRole("button");
		expect(firstCellBtn).not.toHaveFocus();

		const lastCellBtn = within(cells[3]).getByRole("button");
		expect(lastCellBtn).toHaveFocus();

		await userEvent.keyboard(`{ArrowLeft>3/}`);
		expect(firstCellBtn).toHaveFocus();
		expect(screen.getByRole("grid")).toHaveAttribute(
			"aria-activedescendant",
			"selectBoxCell_0",
		);
	});

	test.each([
		{ key: "{Enter}", keyName: "Enter" },
		{ key: " ", keyName: "Space" },
	])("should call onClick props when $keyName key press", async ({ key }) => {
		const onClickMock = vi.fn();
		render(<SelectBox onClick={onClickMock} />);

		await userEvent.keyboard(`{ArrowRight>3/}`);
		await userEvent.keyboard(key);

		expect(onClickMock).toHaveBeenCalledWith(3);
	});
});
