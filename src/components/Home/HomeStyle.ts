import styled from 'styled-components'

import { Section, Tooltip } from '../../constant/style'

export const HomeContainer = styled(Section)`
   display: flex;
   align-items: center;
   gap: 5rem;
`
export const HomeInfo = styled.div``
export const H1 = styled.h1`
   font-size: 5.5rem;
   color: var(--main-color);
   line-height: 1;
`
export const H3 = styled.h1`
   font-size: 3rem;
`

export const BtnSciWrapper = styled.div`
   display: flex;
   align-items: center;
`

export const SciWrapper = styled.div`
   margin-left: 2rem;
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
