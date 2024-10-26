import styled from 'styled-components'

import { ImgBox } from '../../constant/style'

export const ImgWrapper = styled.div``
export const ImgBoxWrapper = styled(ImgBox)<{ $page: string }>`
   background: ${({ $page }) => ($page === 'About' ? `transparent` : '')};
   box-shadow: ${({ $page }) =>
      $page === 'About' ? `0 0 2rem var(--main-color), inset 0 0 1rem var(--main-color)` : ''};
   &:hover {
      box-shadow: ${({ $page }) => ($page === 'Home' ? '0 0 8rem var(--main-color)' : '')};
   }
`
export const ImgBoxAbout = styled(ImgBox)`
   background: transparent;
   &:hover {
      box-shadow: 0 0 8rem var(--main-color);
   }
`
export const Img = styled.img`
   position: absolute;
   top: 3rem;
   display: block;
   width: 85%;
   object-fit: cover;
`
