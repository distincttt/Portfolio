import { resumeSkills } from '../../../constant/resumeSkills'

import { PResume } from '../ResumeStyle'
import { ISkills, TabGridSkills, TabItemSkills } from './ResumeSkillsStyle'

export const ResumeSkills = ({ active }: { active: boolean }): JSX.Element => {
   return (
      <TabGridSkills $active={active}>
         {resumeSkills.map(({ p, className }, key) => (
            <TabItemSkills key={key}>
               <ISkills className={className}></ISkills>
               <PResume>{p}</PResume>
            </TabItemSkills>
         ))}
      </TabGridSkills>
   )
}
