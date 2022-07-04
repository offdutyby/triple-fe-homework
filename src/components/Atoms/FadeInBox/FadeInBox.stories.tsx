import { Meta, Story } from '@storybook/react'

import FadeInBox from './FadeInBox'

export default {
  title: 'components/Atoms/FadeInBox',
  component: FadeInBox,
} as Meta

function Template() {
  return <FadeInBox>안녕하세요</FadeInBox>
}

export const Default: Story = Template.bind({})
