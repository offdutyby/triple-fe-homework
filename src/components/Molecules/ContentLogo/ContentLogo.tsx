import styled from 'styled-components'

import Text from 'components/Atoms/Text/Text'
import { CONTENT_LOGO } from 'utils/Contstants'

const Container = styled.div<{ imgUrl: string }>`
  position: relative;
  width: 400px;
  height: 338px;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: 400px;
  background-repeat: no-repeat;
`
const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 38px;
`

const ContentLogo = () => {
  return (
    <Container imgUrl={CONTENT_LOGO.imgUrl}>
      <TextBox>
        <Text
          color="grey100"
          fontSize="15px"
          fontWeight="400"
          lineHeight="15px"
        >
          <span>{CONTENT_LOGO.text}</span>
        </Text>
      </TextBox>
    </Container>
  )
}

export default ContentLogo
