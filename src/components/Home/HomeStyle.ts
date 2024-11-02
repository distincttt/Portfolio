import styled from 'styled-components'

import { Section, Tooltip } from '../../constant/style'

export const HomeContainer = styled(Section)`
   display: flex;
   align-items: center;
   gap: 5rem;
   @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      justify-content: center;
      gap: 2rem;
      padding-bottom: 6rem;
   }
`
export const HomeInfo = styled.div`
   @media screen and (max-width: 400px) {
      text-align: center;
   }
`
export const H1 = styled.h1`
   font-size: 5.5rem;
   color: var(--main-color);
   line-height: 1;
   @media screen and (max-width: 400px) {
      font-size: 5rem;
   }
`
export const H3 = styled.h1`
   font-size: 3rem;
`

export const BtnSciWrapper = styled.div`
   display: flex;
   align-items: center;
   @media screen and (max-width: 400px) {
      flex-direction: column;
   }
`

export const SciWrapper = styled.div`
   margin-left: 2rem;
   @media screen and (max-width: 400px) {
      margin: 2rem 0;
   }
`
export const A = styled.a`
   position: relative;
   display: inline-flex;
   text-decoration: none;
   padding: 0.8rem;
   border: 0.2rem solid var(--main-color);
   border-radius: 50%;
   font-size: 2rem;
   color: var(--main-color);
   margin: 0 0.8rem;
   transition: 0.3s;
   &:hover {
      background: var(--main-color);
      color: var(--bg-color);
   }
`
export const TooltipHome = styled(Tooltip)`
   ${A} :hover + && {
      visibility: visible;
      opacity: 1;
   }
`
