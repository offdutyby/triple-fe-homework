import styled from 'styled-components'

import Text from 'components/Atoms/Text/Text'

interface Props {
  firstText: string
  secondText: string
}

const Container = styled.div`
  display: flex;
`

const MetrixItem = ({ firstText, secondText }: Props) => {
  return (
    <Container>
      <Text color="default" fontSize="36px" fontWeight="700" lineHeight="36px">
        350
      </Text>
      <Text color="default" fontSize="36px" fontWeight="700" lineHeight="36px">
        {firstText}
      </Text>
      <Text color="default" fontSize="36px" fontWeight="400" lineHeight="36px">
        {secondText}
      </Text>
    </Container>
  )
}

export default MetrixItem
