import styled from 'styled-components'

export const WrapperContainer = styled.div`
   width: 100vw;
   height: 100vh;
   perspective: 1500px;
   perspective-origin: 50%;
`
export const Box = styled.div<{ rotate: string }>`
   position: relative;
   width: 100%;
   height: 100%;
   transform-style: preserve-3d;
   transform-origin: 50% 50% -50vw;
   transform: ${({ rotate }) => rotate};
   transition: 2s;
   animation: animate-cube 4s ease-in-out backwards;
`
