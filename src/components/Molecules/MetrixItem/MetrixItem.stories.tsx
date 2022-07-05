import { Meta, Story } from '@storybook/react'

import MetrixItem from './MetrixItem'

interface Props {
  firstText: string
  secondText: string
  maxCount: number
}

export default {
  title: 'components/Molecules/MetrixItem',
  component: MetrixItem,
} as Meta

function Template({ maxCount, firstText, secondText }: Props) {
  return (
    <MetrixItem
      maxCount={maxCount}
      firstText={firstText}
      secondText={secondText}
    />
  )
}
export const Default: Story<Props> = Template.bind({})

Default.args = {
  maxCount: 700,
  firstText: '만 명',
  secondText: '의 여행자',
}
