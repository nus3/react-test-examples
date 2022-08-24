import { userEvent, within } from '@storybook/testing-library';

import { Toast } from './Toast';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'Toast',
  component: Toast
} as Meta;

export const Default: ComponentStoryObj<typeof Toast> = {
  args: {
    children: 'Hello nus3 in Storybook!!'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button');
    userEvent.click(btn);
  }
};
