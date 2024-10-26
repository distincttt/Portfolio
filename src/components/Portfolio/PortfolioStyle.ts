import styled from 'styled-components'

import { H3, Section, TabList } from '../../constant/style'

export const PortfolioContainer = styled(Section)`
   padding-top: 2rem;
   padding-bottom: 28rem;
   transform: translateX(-50vw) translateZ(-50vw) rotateY(-90deg);
`
export const TabListPortfolio = styled(TabList)<{ $active: boolean }>`
   justify-content: space-evenly;
   border-color: ${(props) => (props.$active ? 'var(--main-color)' : '')};
   color: ${(props) => (props.$active ? 'var(--main-color)' : '')};
`
export const H3Portfolio = styled(H3)``
export const P = styled.p``
