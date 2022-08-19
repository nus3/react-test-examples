import { userEvent, within } from '@storybook/testing-library';
import { useState } from 'react';

import { Toast, ToastProps } from './Toast';

import type { ComponentStoryObj, Meta } from '@storybook/react';

const Component = (args: Partial<ToastProps>) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Toast
        show={show}
        onClickClose={() => {
          setShow(false);
        }}
        {...args}
      >
        Hello nus3!
      </Toast>
      <button
        onClick={() => {
          setShow((show) => !show);
        }}
        data-testid="OpenBtn"
      >
        Show
      </button>
    </>
  );
};

export default {
  title: 'Toast',
  component: Component
} as Meta;

export const Default: ComponentStoryObj<typeof Toast> = {
  args: {},
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByTestId('OpenBtn');
    userEvent.click(btn);
  }
};
