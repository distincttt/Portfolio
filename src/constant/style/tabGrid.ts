import styled from 'styled-components'

export const TabGrid = styled.div<{ $active: boolean }>`
   position: absolute;
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
   gap: 2rem;
   overflow-y: auto;
   overflow-x: hidden;
   transition: ${({ $active }) => ($active ? '.5s' : 0)};
   opacity: ${({ $active }) => ($active ? 1 : 0)};
   visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
   transform: ${({ $active }) => ($active ? 'scale(1)' : 'scale(0.8)')};
`
