import { resumeSkills } from '../../../constant/resumeSkills'

import { P } from '../ResumeStyle'
import { ISkills, TabGridSkills, TabItemSkills } from './ResumeSkillsStyle'

export const ResumeSkills = ({ active }: { active: boolean }): JSX.Element => {
   return (
      <TabGridSkills $active={active}>
         {resumeSkills.map(({ p, className }, key) => (
            <TabItemSkills key={key}>
               <ISkills className={className}></ISkills>
               <P>{p}</P>
            </TabItemSkills>
         ))}
      </TabGridSkills>
   )
}
