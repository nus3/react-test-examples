import { fn } from "@storybook/test";
import { Button } from "./Button";

import type { StoryObj, Meta } from "@storybook/react";

const meta: Meta = {
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "label",
		onClick: fn(),
	},
};
