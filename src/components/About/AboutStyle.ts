import styled from 'styled-components'

import { H2, Section } from '../../constant/style'

export const AboutContainer = styled(Section)`
   display: flex;
   align-items: center;
   gap: 5rem;
   transform: translateX(50vw) translateZ(-50vw) rotateY(90deg);
`
export const AboutInfo = styled.div``
export const H2About = styled(H2)`
   text-align: left;
`
export const H3 = styled.h3`
   font-size: 2.5rem;
   color: var(--main-color);
   margin-top: -1rem;
`
export const Ul = styled.ul`
   padding: 1.5rem;
`
export const Li = styled.li`
   font-size: 1.2rem;
`
