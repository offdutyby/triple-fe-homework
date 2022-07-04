import { Meta, Story } from '@storybook/react'

import MetrixItem from './MetrixItem'

interface Props {
  firstText: string
  secondText: string
}

export default {
  title: 'components/Molecules/MetrixItem',
  component: MetrixItem,
} as Meta

function Template({ firstText, secondText }: Props) {
  return <MetrixItem firstText={firstText} secondText={secondText} />
}
export const Default: Story<Props> = Template.bind({})

Default.args = {
  firstText: '만 명',
  secondText: '의 여행자',
}
