import { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Navbar } from '../Navbar'
import { Wrapper } from '../Wrapper'

import { tabInitial } from '../../constant/tabInitial'

import { usePersistentTheme } from '../../shared/utils'

const GlobalStyle = createGlobalStyle`
  :root {
    --nav-bg-color: ${({ theme }) => theme.navBgColor};
    --bg-color: ${({ theme }) => theme.bgColor};
    --second-bg-color: ${({ theme }) => theme.secondBgColor};
    --third-bg-color: ${({ theme }) => theme.thirdBgColor};
    --main-color: ${({ theme }) => theme.mainColor};
    --white-color: ${({ theme }) => theme.whiteColor};
    --tab-list-color: ${({ theme }) => theme.tabListColor};
  }
`

export const App = (): JSX.Element => {
   const [tabs, setTabs] = useState(tabInitial)
   const [theme, setTheme] = usePersistentTheme()

   const onClick = (key: number) => {
      setTabs((prevTabs) =>
         prevTabs.map((tab, idx) => ({ ...tab, active: idx === key ? true : false })),
      )
   }

   const rotate = tabs.find((tab) => tab.active === true)?.rotate ?? 'rotateY(0deg)'
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <Wrapper rotate={rotate} theme={theme} setTheme={setTheme} />
         <Navbar tabs={tabs} onClick={onClick} />
      </ThemeProvider>
   )
}
