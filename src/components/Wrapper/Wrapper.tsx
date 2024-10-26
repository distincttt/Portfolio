import { Li, Lis } from '../../shared/types'

import { About } from '../About'
import { Home } from '../Home'
import { Portfolio } from '../Portfolio'
import { Resume } from '../Resume'

import { Box, WrapperContainer } from './WrapperStyle'

export const Wrapper = ({ lis }: { lis: Lis }): JSX.Element => {
   const rotate = (lis.find((li) => li.active === true) as Li).rotate
   // if (lis.length !== 0) rotate = lis.find((li) => li.active === true).rotate
   // else rotate = 'rotateY(0deg)'
   // lis.length ? (rotate = lis.find((li) => li.active === true).rotate) : (rotate = 'rotateY(0deg)')

   return (
      <WrapperContainer>
         <Box rotate={rotate}>
            <Home />
            <About />
            <Resume />
            <Portfolio />
         </Box>
      </WrapperContainer>
   )
}
