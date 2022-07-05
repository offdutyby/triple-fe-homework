import styled from 'styled-components'

import ContentLogo from 'components/Molecules/ContentLogo/ContentLogo'
import MetrixItem from 'components/Molecules/MetrixItem/MetrixItem'
import {
  AWARD_ITEM_1,
  AWARD_ITEM_2,
  METRIX_ITEM_1,
  METRIX_ITEM_2,
  METRIX_ITEM_3,
} from 'utils/Contstants'
import AwardItem from 'components/Molecules/AwardItem/AwardItem'
import FadeInBox from 'components/Atoms/FadeInBox/FadeInBox'

const Container = styled.section`
  max-width: 1040px;
  height: 552px;
  display: flex;
  margin: 0 auto;
`

const Left = styled.section`
  width: 50%;
  margin-top: 150px;
`
const AwardLogoBox = styled.article`
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  background-repeat: no-repeat;
`

const Right = styled.section`
  width: 50%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StaticsMatrixBox = styled.article`
  width: 417px;
  height: 168px;
  margin-bottom: 25px;
`
const StaticsImageBox = styled.article`
  width: 417px;
  height: 68px;
  display: flex;
  gap: 25px;
`

const MainTemplate = () => {
  return (
    <Container>
      <Left>
        <FadeInBox delay={0}>
          <AwardLogoBox>
            <ContentLogo />
          </AwardLogoBox>
        </FadeInBox>
      </Left>
      <Right>
        <FadeInBox delay={100}>
          <StaticsMatrixBox>
            <MetrixItem
              maxCount={700}
              firstText={METRIX_ITEM_1.firstText}
              secondText={METRIX_ITEM_1.secondText}
            />
            <MetrixItem
              maxCount={100}
              firstText={METRIX_ITEM_2.firstText}
              secondText={METRIX_ITEM_2.secondText}
            />
            <MetrixItem
              maxCount={470}
              firstText={METRIX_ITEM_3.firstText}
              secondText={METRIX_ITEM_3.secondText}
            />
          </StaticsMatrixBox>
        </FadeInBox>
        <FadeInBox delay={200}>
          <StaticsImageBox>
            <AwardItem
              imgUrl={AWARD_ITEM_1.imgUrl}
              imgAlt={AWARD_ITEM_1.imgAlt}
              firstText={AWARD_ITEM_1.firstText}
              secondText={AWARD_ITEM_1.secondText}
            />
            <AwardItem
              imgUrl={AWARD_ITEM_2.imgUrl}
              imgAlt={AWARD_ITEM_2.imgAlt}
              firstText={AWARD_ITEM_2.firstText}
              secondText={AWARD_ITEM_2.secondText}
            />
          </StaticsImageBox>
        </FadeInBox>
      </Right>
    </Container>
  )
}

export default MainTemplate
