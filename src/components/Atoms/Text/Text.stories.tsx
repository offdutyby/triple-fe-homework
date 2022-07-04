import { Meta, Story } from '@storybook/react'
import { ReactNode } from 'react'

import Text from './Text'

interface Props {
  children: ReactNode
  color: 'default' | 'grey100' | 'grey200'
  fontSize: string
  fontWeight: string
  lineHeight: string
}

export default {
  title: 'components/Atoms/Text',
  component: Text,
} as Meta

function Template({
  children,
  color,
  fontSize,
  fontWeight,
  lineHeight,
}: Props) {
  return (
    <Text
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </Text>
  )
}

export const Default: Story<Props> = Template.bind({})
Default.args = {
  children: <span>안녕하세요.</span>,
  color: 'default',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '22px',
}
