import { DateText } from "./DateText";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: DateText,
} satisfies Meta<typeof DateText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
