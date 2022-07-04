import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.section`
  max-width: 1040px;
  height: 552px;
  background-color: beige;
  display: flex;
  margin: 0 auto;
`

const Left = styled.section`
  width: 50%;
  margin-top: 150px;
  background-color: chocolate;
`
const AwordLogoBox = styled.article`
  background-color: grey;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  background-repeat: no-repeat;
`

const Right = styled.section`
  width: 50%;
  margin-top: 150px;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StaticsMatrixBox = styled.article`
  width: 417px;
  height: 168px;
  background-color: black;
  margin-bottom: 50px;
`
const StaticsImageBox = styled.article`
  width: 417px;
  height: 68px;
  background-color: blueviolet;
`

const MainTemplate: FC = () => {
  return (
    <Container>
      <Left>
        <AwordLogoBox />
      </Left>
      <Right>
        <StaticsMatrixBox />
        <StaticsImageBox />
      </Right>
    </Container>
  )
}

export default MainTemplate
