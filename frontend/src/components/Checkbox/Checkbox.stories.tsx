import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Checkbox from './Checkbox'

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: { onChange: fn() },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Checkbox',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Checkbox',
  },
}
