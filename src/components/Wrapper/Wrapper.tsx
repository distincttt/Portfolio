import { About } from '../About'
import { Home } from '../Home'
import { Portfolio } from '../Portfolio'
import { Resume } from '../Resume'
import { ThemeSelector } from '../PagesWrapper'

import { Box, WrapperContainer } from './WrapperStyle'

import { ThemeType } from '../../theme'

interface WrapperProps {
   rotate: string
   theme: ThemeType
   setTheme: (theme: ThemeType) => void
}

export const Wrapper = ({ rotate, theme, setTheme }: WrapperProps): JSX.Element => {
   return (
      <WrapperContainer>
         <ThemeSelector theme={theme} setTheme={setTheme} />
         <Box rotate={rotate}>
            <Home />
            <About />
            <Resume />
            <Portfolio />
         </Box>
      </WrapperContainer>
   )
}
