import styled from 'styled-components'

import { H4, I } from '../../../constant/style'
import { PResume } from '../ResumeStyle'

export const H4ResumeEducation = styled(H4)`
   &:nth-child(1),
   &:nth-child(3) {
      font-size: 1.7rem;
      color: var(--main-color);
      font-weight: 400;
   }
   &:nth-child(3) {
      position: relative;
      color: var(--white-color);
      margin-left: 2rem;
      &::before {
         content: '';
         position: absolute;
         left: -2rem;
         top: 50%;
         transform: translateY(-50%);
         width: 1rem;
         height: 1rem;
         background: var(--main-color);
         border-radius: 50%;
      }
   }
`
export const Ul = styled.ul`
   padding: 0.3rem;
   list-style: none;
`
export const Li = styled.li`
   padding-top: 0.3rem;
`
export const PResumeEducation = styled(PResume)`
   font-size: 1.4rem;
`
export const LabelResumeEducation = styled.label`
   display: flex;
   gap: 0.5rem;
`
export const IResumeEducation = styled(I)`
   position: relative;
   top: 0.3rem;
`
