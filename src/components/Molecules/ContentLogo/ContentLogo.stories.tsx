import { Meta, Story } from '@storybook/react'

import ContentLogo from './ContentLogo'

export default {
  title: 'components/Molecules/ContentLogo',
  component: ContentLogo,
} as Meta

function Template() {
  return <ContentLogo />
}

export const Default: Story = Template.bind({})
