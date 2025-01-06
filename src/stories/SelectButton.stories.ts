import type {Meta, StoryObj} from "@storybook/react"
import {fn} from "@storybook/test"

import { SelectButton } from './SelectButton';

const meta = {
    title: 'Test/SelectButton',
    component: SelectButton,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
      title: {
        options: ['Normal', 'Bold', 'Italic'],
        // mapping: {
        //   Bold: <b>Bold</b>,
        //   Italic: <i>Italic</i>,
        // },
      },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
  } satisfies Meta<typeof SelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
    args: {
      primary: true,
      label: "SelectButton"
    }
  };


  export const Small: Story = {
    args: {
      size: 'small',
      label: 'SelectButton',
    },
  };
  

  export const Large: Story = {
    args: {
      label: 'SelectButton',
      size: "large"
    },
  };
  