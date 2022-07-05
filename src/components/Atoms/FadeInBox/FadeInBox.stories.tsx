import { Meta, Story } from '@storybook/react'
import { ReactNode } from 'react'

import FadeInBox from './FadeInBox'

interface Props {
  children: ReactNode
  delay: number
}

export default {
  title: 'components/Atoms/FadeInBox',
  component: FadeInBox,
} as Meta

function Template({ children, delay }: Props) {
  return <FadeInBox delay={delay}>{children}</FadeInBox>
}

export const Default: Story<Props> = Template.bind({})

Default.args = {
  children: <span>안녕하세요. 천천히 올라와요.</span>,
  delay: 100,
}
