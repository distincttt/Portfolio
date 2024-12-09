import { skills } from '../../../constant/skills'

import { H4EducationAndSkills } from '../../../constant/style'

import {
   IPortfolioSkill,
   LabelPortfolioSkill,
   SpanPortfolioSkill,
   TabGridPortfolioSkill,
   TabItemPortfolioSkill,
} from './PortfolioExperienceStyle'

export const PortfolioExperience = ({ active }: { active: boolean }): JSX.Element => {
   return (
      <TabGridPortfolioSkill $active={active}>
         {skills.map(({ date, name, company, text }, key) => (
            <TabItemPortfolioSkill key={key}>
               <H4EducationAndSkills>{date}</H4EducationAndSkills>
               <H4EducationAndSkills>{name}</H4EducationAndSkills>
               <H4EducationAndSkills>{company}</H4EducationAndSkills>
               {text.map((p) => (
                  <LabelPortfolioSkill>
                     <IPortfolioSkill className='bx bx-chevron-right'></IPortfolioSkill>
                     <SpanPortfolioSkill>{p}</SpanPortfolioSkill>
                  </LabelPortfolioSkill>
               ))}
            </TabItemPortfolioSkill>
         ))}
      </TabGridPortfolioSkill>
   )
}
