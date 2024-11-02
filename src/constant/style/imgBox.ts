import styled from 'styled-components'

export const ImgBox = styled.div`
   position: relative;
   width: 32vw;
   height: 32vw;
   background: linear-gradient(var(--bg-color), var(--main-color));
   border-radius: 50%;
   border: 0.5rem solid var(--main-color);
   box-shadow: 0 0 2rem var(--main-color);
   display: flex;
   justify-content: center;
   overflow: hidden;
   transition: 1s;
   @media screen and (max-width: 768px) {
      width: 30rem;
      height: 30rem;
   }
   @media screen and (max-width: 400px) {
      width: 20rem;
      height: 20rem;
   }
`
