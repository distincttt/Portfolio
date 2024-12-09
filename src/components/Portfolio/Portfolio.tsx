import { useState } from 'react'

import { PortfolioWork } from './PortfolioWork'
import { PortfolioExperience } from './PortfolioExperince'

import { H2, TabBox, TabWrapper } from '../../constant/style'
import { PortfolioContainer, H3Portfolio, TabListPortfolio } from './PortfolioStyle'

export const Portfolio = (): JSX.Element => {
   const [tabs, setTabs] = useState([
      { text: 'Мои Проекты', active: true },
      { text: 'Мой Опыт', active: false },
   ])

   const onClick = (key: number) => {
      setTabs((prevTabs) =>
         prevTabs.map((tab, idx) => ({ ...tab, active: idx === key ? true : false })),
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
            <PortfolioExperience active={tabs[1].active} />
         </TabWrapper>
      </PortfolioContainer>
   )
}
