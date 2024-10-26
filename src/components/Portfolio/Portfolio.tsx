import { useState } from 'react'

import { PortfolioWork } from './PortfolioWork'
import { PortfolioServices } from './PortfolioServices'

import { H2, TabBox, TabWrapper } from '../../constant/style'
import { PortfolioContainer, H3Portfolio, TabListPortfolio } from './PortfolioStyle'

export const Portfolio = (): JSX.Element => {
   const [tabs, setTabs] = useState([
      { text: 'Мои Проекты', active: true },
      { text: 'Мои Услуги', active: false },
   ])
   const onClick = (key: number) => {
      setTabs(
         tabs.map((tab, idx) =>
            idx === key ? { ...tab, active: true } : { ...tab, active: false },
         ),
      )
   }
   return (
      <PortfolioContainer>
         <H2>Портфолио</H2>
         <TabBox>
            {tabs.map(({ text, active }, key) => (
               <TabListPortfolio key={key} onClick={() => onClick(key)} $active={active}>
                  <H3Portfolio>{text}</H3Portfolio>
               </TabListPortfolio>
            ))}
         </TabBox>
         <TabWrapper>
            <PortfolioWork active={tabs[0].active} />
            <PortfolioServices active={tabs[1].active} />
         </TabWrapper>
      </PortfolioContainer>
   )
}
