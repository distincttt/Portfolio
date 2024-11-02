import { useState } from 'react'

import { Navbar } from '../Navbar'
import { Wrapper } from '../Wrapper'

import { tabInitial } from '../../constant/tabInitial'

export const App = (): JSX.Element => {
   const [tabs, setTabs] = useState(tabInitial)

   const onClick = (key: number) => {
      setTabs((prevTabs) =>
         prevTabs.map((tab, idx) => ({ ...tab, active: idx === key ? true : false })),
      )
   }

   const rotate = tabs.find((tab) => tab.active === true)?.rotate ?? 'rotateY(0deg)'
   return (
      <>
         <Wrapper rotate={rotate} />
         <Navbar tabs={tabs} onClick={onClick} />
      </>
   )
}
