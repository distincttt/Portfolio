import styled from 'styled-components'

import { H4, I, TabGrid, TabItem, Tooltip } from '../../../constant/style'

export const Img = styled.img`
   display: block;
   width: 100%;
   height: 100%;
   object-fit: cover;
   transition: 0.3s;
`
export const Info = styled.div`
   z-index: 1;
   visibility: hidden;
   opacity: 0;
   transition: 0.3s;
`
export const TabGridPortfolioWork = styled(TabGrid)``
export const TabItemPortfolioWork = styled(TabItem)`
   position: relative;
   &:hover {
      ${Img} {
         transform: scale(1.2);
      }
      ${Info} {
         visibility: visible;
         opacity: 1;
      }
      &::before {
         opacity: 0.9;
      }
   }
   &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: var(--third-bg-color);
      border-radius: 0.8rem;
      z-index: 1;
      opacity: 0;
      transition: 0.3s;
   }
`
export const ImgBox = styled.div`
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   border-radius: 0.8rem;
   overflow: hidden;
`
export const H4PortfolioWork = styled(H4)`
   line-height: 1;
`
export const Tech = styled.div`
   color: var(--main-color);
   border-bottom: 0.1rem solid var(--white-color);
   padding-bottom: 1rem;
   margin-bottom: 1rem;
`
export const IconBox = styled.div``
export const TooltipPortfolioWork = styled(Tooltip)`
   top: 6rem;
`
export const IPortfolioWork = styled(I)``
export const A = styled.a`
   position: relative;
   margin-right: 1rem;
   display: inline-flex;
   padding: 1rem;
   background: var(--white-color);
   border-radius: 50%;
   font-size: 2.5rem;
   color: var(--bg-color);
   text-decoration: none;
   transition: 0.3s;
   &:hover {
      background: var(--main-color);
      ${TooltipPortfolioWork} {
         visibility: visible;
         opacity: 1;
      }
      ${IPortfolioWork} {
         animation: animate-icon 1.5s ease-in-out;
      }
   }
`
