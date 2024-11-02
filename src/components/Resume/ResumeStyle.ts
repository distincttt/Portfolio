import styled from 'styled-components'

import { P, Section, TabList } from '../../constant/style'

export const ResumeContainer = styled(Section)`
   padding-top: 2rem;
   padding-bottom: 28rem;
   transform: translateZ(-100vw) rotateY(-180deg);
   transform-origin: 50%;
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

export const Tab = styled(TabList)<{ $active: boolean }>`
   justify-content: space-evenly;
   border-color: ${(props) => (props.$active ? 'var(--main-color)' : '')};
   color: ${(props) => (props.$active ? 'var(--main-color)' : '')};
`
export const PResume = styled(P)`
   margin: 1rem 0 0 0;
`
