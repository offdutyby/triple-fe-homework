import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  delay: number
}

const Container = styled.div<{ delay: number }>`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10%);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
  animation: fadeInUp 700ms ease-in-out;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.delay}ms;
`

const FadeInBox = ({ children, delay }: Props) => {
  return <Container delay={delay}>{children}</Container>
}

export default FadeInBox
