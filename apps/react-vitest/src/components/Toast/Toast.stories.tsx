import { expect, userEvent, within } from "@storybook/test";

import { AUTO_CLOSE_TIME, TOAST_ANIMATION_TIME, Toast } from "./Toast";

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
    await expect(canvas.getByRole("alert")).toBeInTheDocument();

    // HACK: 不安定になる気しかしない
    setTimeout(async () => {
      await expect(canvas.queryByRole("alert")).toBeNull();
    }, AUTO_CLOSE_TIME + TOAST_ANIMATION_TIME);
  },
};
