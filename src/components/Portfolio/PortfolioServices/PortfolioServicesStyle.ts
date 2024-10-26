import styled from 'styled-components'

import { H4, I, TabGrid, TabItem } from '../../../constant/style'

export const IPortfolioServices = styled(I)`
   font-size: 5rem;
   margin-left: -0.3rem;
   transition: 0.3s;
`
export const H4PortfolioServices = styled(H4)`
   transition: 0.3s;
`
export const TabGridPortfolioServices = styled(TabGrid)``
export const TabItemPortfolioServices = styled(TabItem)`
   &:hover {
      ${IPortfolioServices} {
         color: var(--main-color);
      }
      ${H4PortfolioServices} {
         color: var(--main-color);
      }
   }
`
export const IconBox = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 0.5rem;
`
