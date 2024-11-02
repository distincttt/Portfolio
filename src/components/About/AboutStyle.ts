import styled from 'styled-components'

import { Btn, H2, I, Section, Tooltip } from '../../constant/style'

export const AboutContainer = styled(Section)`
   display: flex;
   align-items: center;
   gap: 5rem;
   transform: translateX(50vw) translateZ(-50vw) rotateY(90deg);
   @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      padding-bottom: 6rem;
   }
`
export const AboutInfo = styled.div`
   margin-top: -5rem;
`
export const H2About = styled(H2)`
   text-align: left;
`
export const H3 = styled.h3`
   font-size: 2.5rem;
   color: var(--main-color);
   margin-top: -1rem;
`

export const Ul = styled.ul`
   padding: 1.5rem;
   list-style: none;
`
export const Li = styled.li`
   font-size: 1.2rem;
   padding-top: 0.3rem;
`
export const TooltipAbout = styled(Tooltip)`
   top: 5rem;
`
export const BtnAbout = styled(Btn)`
   position: relative;
   &:hover {
      ${TooltipAbout} {
         visibility: visible;
         opacity: 1;
      }
   }
`
export const AboutInfoWrapper = styled.div`
   display: flex;
   gap: 2rem;
`
export const AboutInfoUlWrapper = styled.div`
   width: 50%;
`
export const LabelAbout = styled.label`
   display: flex;
   gap: 0.5rem;
   @media screen and (max-width: 768px) {
      font-size: 0.9rem;
   }
`
export const IAbout = styled(I)`
   position: relative;
   top: 0.3rem;
`
