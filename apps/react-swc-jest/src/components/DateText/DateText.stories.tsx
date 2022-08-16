import { DateText } from './DateText';

import type { ComponentStoryObj, Meta } from '@storybook/react';

export default {
  title: 'DateText',
  component: DateText
} as Meta;

export const Default: ComponentStoryObj<typeof DateText> = {
  args: {}
};
