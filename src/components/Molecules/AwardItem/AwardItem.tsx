import styled from 'styled-components'

import Text from 'components/Atoms/Text/Text'

interface Props {
  imgUrl: string
  imgAlt: string
  firstText: string
  secondText: string
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
const Image = styled.img`
  width: 54px;
  height: 54px;
`

const TextBox = styled.div`
  margin-left: 7px;
`

const AwardItem = ({ imgUrl, imgAlt, firstText, secondText }: Props) => {
  return (
    <Container>
      <Image src={imgUrl} alt={imgAlt} />
      <TextBox>
        <Text
          color="grey200"
          fontSize="14px"
          fontWeight="700"
          lineHeight="22px"
        >
          {firstText}
        </Text>
        <Text
          color="grey200"
          fontSize="14px"
          fontWeight="700"
          lineHeight="22px"
        >
          {secondText}
        </Text>
      </TextBox>
    </Container>
  )
}

export default AwardItem
