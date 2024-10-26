import styled from 'styled-components'

import { Section, TabList } from '../../constant/style'

export const ResumeContainer = styled(Section)`
   padding-top: 2rem;
   padding-bottom: 28rem;
   transform: translateZ(-100vw) rotateY(-180deg);
   transform-origin: 50%;
`

export const Tab = styled(TabList)<{ $active: boolean }>`
   justify-content: space-evenly;
   border-color: ${(props) => (props.$active ? 'var(--main-color)' : '')};
   color: ${(props) => (props.$active ? 'var(--main-color)' : '')};
`
export const P = styled.p`
   margin-top: 1rem;
`
