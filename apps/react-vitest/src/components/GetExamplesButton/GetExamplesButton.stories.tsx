import { GetExamplesButton } from "./GetExamplesButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: GetExamplesButton,
} satisfies Meta<typeof GetExamplesButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
