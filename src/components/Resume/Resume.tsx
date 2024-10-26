import { useState } from 'react'

import { ResumeContainer, Tab } from './ResumeStyle'
import { ResumeSkills } from './ResumeSkills'
import { ResumeEducation } from './ResumeEducation'

import { H2, H3, TabBox, TabWrapper } from '../../constant/style'

export const Resume = (): JSX.Element => {
   const [tabs, setTabs] = useState([
      { text: 'Навыки', active: true },
      { text: 'Образование', active: false },
   ])
   const onClick = (key: number) => {
      setTabs(
         tabs.map((tab, idx) =>
            idx === key ? { ...tab, active: true } : { ...tab, active: false },
         ),
      )
   }

   return (
      <ResumeContainer>
         <H2>Резюме</H2>
         <TabBox>
            {tabs.map(({ text, active }, key) => (
               <Tab key={key} onClick={() => onClick(key)} $active={active}>
                  <H3>{text}</H3>
               </Tab>
            ))}
         </TabBox>
         <TabWrapper>
            <ResumeSkills active={tabs[0].active} />
            <ResumeEducation active={tabs[1].active} />
         </TabWrapper>
      </ResumeContainer>
   )
}
