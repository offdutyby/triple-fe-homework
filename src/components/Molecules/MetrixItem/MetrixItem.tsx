import styled from 'styled-components'

import Text from 'components/Atoms/Text/Text'
import useCount from 'hooks/useCount'

interface Props {
  maxCount: number
  firstText: string
  secondText: string
}

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const MetrixItem = ({ maxCount, firstText, secondText }: Props) => {
  const count = useCount(maxCount)
  return (
    <Container>
      <Text color="default" fontSize="36px" fontWeight="700" lineHeight="36px">
        {count}
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
