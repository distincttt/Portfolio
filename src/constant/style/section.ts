import styled from 'styled-components'

export const Section = styled.section`
   position: absolute;
   width: 100%;
   height: 100%;
   background: var(--bg-color);
   padding: 0 10%;
   backface-visibility: hidden;
   &:nth-child(even) {
      background: var(--second-bg-color);
   }
`
