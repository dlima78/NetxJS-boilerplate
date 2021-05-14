import React from 'react'
import { Meta, Story } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'Yarnnsnns',
  description: 'fdfdkkii'
}
