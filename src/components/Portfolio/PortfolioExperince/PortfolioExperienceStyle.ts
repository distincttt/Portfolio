import styled from 'styled-components'

import { I, TabGrid, TabItem } from '../../../constant/style'

export const TabGridPortfolioSkill = styled(TabGrid)`
   display: flex;
   width: 100%;
`
export const TabItemPortfolioSkill = styled(TabItem)`
   width: 100%;
   margin: 0 auto;
   padding: 4rem;
   gap: 1rem;

   @media screen and (min-width: 1200px) {
      width: 50%;
   }
`
export const IPortfolioSkill = styled(I)`
   font-size: 1.4rem;
   position: relative;
   top: 0.5rem;
`
export const LabelPortfolioSkill = styled.label`
   display: flex;
   gap: 0.5rem;
`
export const SpanPortfolioSkill = styled.span`
   font-size: 1.6rem;
`
