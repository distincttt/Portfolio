import styled from 'styled-components'

import { I, TabGrid, TabItem } from '../../../constant/style'

export const TabGridSkills = styled(TabGrid)`
   grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
`
export const ISkills = styled(I)`
   font-size: 8rem;
   transition: 0.3s;
`
export const TabItemSkills = styled(TabItem)`
   align-items: center;
   &:hover {
      ${ISkills} {
         color: var(--main-color);
      }
   }
`
