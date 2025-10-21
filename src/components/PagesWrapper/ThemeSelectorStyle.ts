import styled from 'styled-components'

export const ThemeSelectorContainer = styled.div`
   position: absolute;
   top: 40px;
   right: 40px;
   z-index: 20;
   user-select: none;
   font-size: 1.4rem;
   animation: animate-nav 1s ease-in-out backwards;
   animation-delay: 4s;
   @media screen and (max-width: 400px) {
      font-size: 1rem;
      top: 20px;
      right: 20px;
   }
`

export const SelectorButton = styled.div`
   background: var(--nav-bg-color);
   border: 1px solid var(--main-color);
   color: var(--white-color);
   border-radius: 10px;
   padding: 12px 18px;
   font-weight: 500;
   cursor: pointer;
   transition: background 1s ease;
   width: 140px;
   display: flex;
   justify-content: center;
   &:hover {
      background: var(--second-bg-color);
   }
   @media screen and (max-width: 400px) {
      width: 100px;
      padding: 8px 14px;
   }
`

export const Dropdown = styled.div<{ $open: boolean }>`
   position: absolute;
   width: 140px;
   top: 100%;
   left: 0;
   margin-top: 8px;
   background: var(--second-bg-color);
   border: 1px solid var(--main-color);
   border-radius: 10px;
   overflow: hidden;
   opacity: ${({ $open }) => ($open ? 1 : 0)};
   pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
   transform: translateY(${({ $open }) => ($open ? '0' : '-5px')});
   transition: all 0.25s ease;
   @media screen and (max-width: 400px) {
      width: 100px;
   }
`

export const DropdownItem = styled.button`
   display: block;
   background: transparent;
   border: none;
   color: var(--white-color);
   width: 100%;
   text-align: center;
   padding: 12px 18px;
   cursor: pointer;
   font-size: 1.4rem;
   &:hover {
      background: var(--third-bg-color);
   }
   @media screen and (max-width: 400px) {
      font-size: 1rem;
      padding: 8px 14px;
   }
`
