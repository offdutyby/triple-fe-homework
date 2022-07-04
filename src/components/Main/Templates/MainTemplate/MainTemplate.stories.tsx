import { Story } from '@storybook/react'

import MainTemplate from './MainTemplate'

export default {
  title: 'components/Main/Templates/MainTemplate',
  component: MainTemplate,
}
function Template() {
  return <MainTemplate />
}
export const Default: Story = Template.bind({})
