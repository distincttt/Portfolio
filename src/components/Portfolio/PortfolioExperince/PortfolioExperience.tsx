import { skills } from '../../../constant/skills'

import { H4EducationAndSkills, TabGrid, TabItem } from '../../../constant/style'

import {
   IPortfolioSkill,
   LabelPortfolioSkill,
   SpanPortfolioSkill,
} from './PortfolioExperienceStyle'

export const PortfolioExperience = ({ active }: { active: boolean }): JSX.Element => {
   return (
      <TabGrid $active={active}>
         {skills.map(({ name, company, text }, key) => (
            <TabItem key={key}>
               <H4EducationAndSkills>{name}</H4EducationAndSkills>
               <H4EducationAndSkills>{company}</H4EducationAndSkills>
               {text.map((p) => (
                  <LabelPortfolioSkill>
                     <IPortfolioSkill className='bx bx-chevron-right'></IPortfolioSkill>
                     <SpanPortfolioSkill>{p}</SpanPortfolioSkill>
                  </LabelPortfolioSkill>
               ))}
            </TabItem>
         ))}
      </TabGrid>
   )
}
