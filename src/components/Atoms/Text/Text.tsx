import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  color: 'default' | 'grey100' | 'grey200'
  fontSize: string
  fontWeight: string
  lineHeight: string
}

const Container = styled.div<Props>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme, color }) => theme.colors[color]};
  line-height: ${({ lineHeight }) => lineHeight};
`

const Text = ({ children, color, fontSize, fontWeight, lineHeight }: Props) => {
  return (
    <Container
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </Container>
  )
}

export default Text
