import styled from 'styled-components'
import { H4 } from './h4'

export const H4EducationAndSkills = styled(H4)`
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
