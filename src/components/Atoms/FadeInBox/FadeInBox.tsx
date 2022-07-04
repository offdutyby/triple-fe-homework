import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Container = styled.div`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: fadeInUp 1s;
`

const FadeInBox = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default FadeInBox
