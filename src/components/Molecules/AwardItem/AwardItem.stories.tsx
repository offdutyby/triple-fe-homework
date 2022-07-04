import { Meta, Story } from '@storybook/react'

import AwardItem from './AwardItem'

import { AWARD_ITEM_1 } from 'utils/Contstants'

interface Props {
  imgUrl: string
  imgAlt: string
  firstText: string
  secondText: string
}

export default {
  title: 'components/Molecules/AwardItem',
  component: AwardItem,
} as Meta

function Template() {
  return (
    <AwardItem
      imgUrl={AWARD_ITEM_1.imgUrl}
      imgAlt={AWARD_ITEM_1.imgAlt}
      firstText={AWARD_ITEM_1.firstText}
      secondText={AWARD_ITEM_1.secondText}
    />
  )
}
export const Default: Story<Props> = Template.bind({})
