import { About } from '../About'
import { Home } from '../Home'
import { Portfolio } from '../Portfolio'
import { Resume } from '../Resume'

import { Box, WrapperContainer } from './WrapperStyle'

export const Wrapper = ({ rotate }: { rotate: string }): JSX.Element => {
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
