import styled from 'styled-components'

import { H3, P, Section, TabList } from '../../constant/style'

export const PortfolioContainer = styled(Section)`
   padding-top: 2rem;
   padding-bottom: 28rem;
   transform: translateX(-50vw) translateZ(-50vw) rotateY(-90deg);
   @media screen and (max-width: 992px) {
      padding-top: 1.5rem;
      padding-bottom: 27rem;
   }
   @media screen and (max-width: 768px) {
      padding-bottom: 25rem;
   }
   @media screen and (max-width: 600px) {
      padding-top: 1rem;
      padding-bottom: 25rem;
   }
`
export const TabListPortfolio = styled(TabList)<{ $active: boolean }>`
   justify-content: space-evenly;
   border-color: ${(props) => (props.$active ? 'var(--main-color)' : '')};
   color: ${(props) => (props.$active ? 'var(--main-color)' : '')};
`
export const H3Portfolio = styled(H3)``
export const PPortfolio = styled(P)`
   margin: 0;
`
