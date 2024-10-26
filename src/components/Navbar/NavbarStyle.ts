import styled from 'styled-components'

import { Tooltip } from '../../constant/style'

export const NavbarWrapper = styled.nav`
   position: fixed;
   bottom: 2rem;
   left: 50%;
   transform: translateX(-50%);
   width: 30rem;
   padding: 2rem 0;
   background: var(--nav-bg-color);
   border-radius: 5rem;
   z-index: 1;
   animation: animate-nav 1s ease-in-out backwards;
   animation-delay: 4s;
`
export const Ul = styled.ul`
   display: flex;
   justify-content: space-evenly;
`
export const TooltipNavbar = styled(Tooltip)``
export const Li = styled.li<{ $active: boolean }>`
   position: relative;
   display: flex;
   font-size: 3rem;
   cursor: pointer;
   transition: 0.3s;
   color: ${(props) => (props.$active ? `var(--main-color)` : '')};
   &:hover {
      color: var(--main-color);
      ${TooltipNavbar} {
         visibility: visible;
         opacity: 1;
      }
   }
`
