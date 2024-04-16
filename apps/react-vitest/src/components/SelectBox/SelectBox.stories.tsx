import { action } from "@storybook/addon-actions";

import { SelectBox } from "./SelectBox";

import type { ComponentStoryObj, Meta } from "@storybook/react";

export default {
	title: "SelectBox",
	component: SelectBox,
} as Meta;

export const Default: ComponentStoryObj<typeof SelectBox> = {
	args: {
		onClick: action("onClick"),
	},
};
