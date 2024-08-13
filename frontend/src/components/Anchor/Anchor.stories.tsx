import type { Meta, StoryObj } from '@storybook/react'
import Anchor from './Anchor'

const meta = {
  title: 'Example/Anchor',
  component: Anchor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Anchor>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Anchor',
    href: '',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Anchor #1',
    href: '',
  },
}
