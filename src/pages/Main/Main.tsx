import styled from 'styled-components'

import MainTemplate from 'components/Templates/MainTemplate/MainTemplate'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
`

const Main = () => {
  return (
    <Container>
      <MainTemplate />
    </Container>
  )
}

export default Main
