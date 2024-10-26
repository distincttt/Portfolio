import styled from 'styled-components'

export const Tooltip = styled.span`
   position: absolute;
   top: -4rem;
   left: 50%;
   transform: translateX(-50%);
   padding: 0.3rem 1rem;
   background: var(--main-color);
   border-radius: 0.4rem;
   font-size: 1.6rem;
   color: var(--bg-color);
   font-weight: 600;
   white-space: nowrap;
   visibility: hidden;
   opacity: 0;
   transition: 0.3s;
`
