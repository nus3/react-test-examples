import { userEvent, within } from "@storybook/test";

import { Toast } from "./Toast";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
	component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Hello nus3 in Storybook!!",
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const btn = canvas.getByRole("button");
		await userEvent.click(btn);
	},
};
