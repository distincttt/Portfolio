import styled from 'styled-components'

export const Btn = styled.a`
   display: inline-flex;
   text-decoration: none;
   padding: 1.2rem 3rem;
   background: var(--main-color);
   border-radius: 5rem;
   box-shadow: 0 0 1rem var(--main-color);
   font-size: 1.6rem;
   color: var(--bg-color);
   font-weight: 600;
   transition: 0.3s;
   &:hover {
      box-shadow: none;
   }
`
