import { useState } from 'react';

import { Tooltip, TooltipProps } from './Tooltip';

import type { ComponentStoryObj, Meta } from '@storybook/react';

const Component = (args: Partial<TooltipProps>) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Tooltip
        show={show}
        onClickClose={() => {
          setShow(false);
        }}
        {...args}
      >
        Tooltip text
      </Tooltip>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show Tooltip
      </button>
    </>
  );
};

export default {
  title: 'Tooltip',
  component: Component
} as Meta;

export const Default: ComponentStoryObj<typeof Tooltip> = {
  args: {}
};
