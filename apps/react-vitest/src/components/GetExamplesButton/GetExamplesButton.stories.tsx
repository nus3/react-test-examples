import { GetExamplesButton } from "./GetExamplesButton";
import { getExamples } from "#src/api/example.mock";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: GetExamplesButton,
} satisfies Meta<typeof GetExamplesButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ChangeMockData: Story = {
  args: {},
  beforeEach: async () => {
    getExamples.mockReturnValue(
      new Promise((resolve, _) => {
        resolve({
          examples: [
            { id: "1", name: "change-mock-data-nus1" },
            { id: "2", name: "change-mock-data-nus2" },
            { id: "3", name: "change-mock-data-nus3" },
          ],
        });
      }),
    );
  },
};
