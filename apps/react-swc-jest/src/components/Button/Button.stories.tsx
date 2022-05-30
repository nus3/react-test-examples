import { Button } from './Button';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: 'ラベル'
  }
};
