import { MyPhoto } from '../MyPhoto'

import { infosAbout } from '../../constant/infosAbout'

import { P } from '../../constant/style'
import {
   AboutInfo,
   AboutContainer,
   H2About,
   H3,
   Li,
   Ul,
   TooltipAbout,
   BtnAbout,
   AboutInfoWrapper,
   IAbout,
   AboutInfoUlWrapper,
   LabelAbout,
} from './AboutStyle'

export const About = (): JSX.Element => {
   return (
      <AboutContainer>
         <MyPhoto src={'images/myPhoto2.png'} />
         <AboutInfo>
            <H2About>Обо мне</H2About>
            <H3>Frontend Developer</H3>
            <P>Мой технологический стэк: React, TypeScript, Redux Toolkit, styled-components </P>
            <AboutInfoWrapper>
               {infosAbout.map(({ name, lis }) => (
                  <AboutInfoUlWrapper>
                     <Ul>
                        <P>{name}</P>
                        {lis.map((li) => (
                           <Li>
                              <LabelAbout>
                                 <IAbout className='bx bx-chevron-right'></IAbout>
                                 {li}
                              </LabelAbout>
                           </Li>
                        ))}
                     </Ul>
                  </AboutInfoUlWrapper>
               ))}
            </AboutInfoWrapper>
            <BtnAbout
               href='https://spb.hh.ru/resume/33b6ab07ff096934a50039ed1f734131326768'
               target='_blank'
            >
               Ещё обо мне
               <TooltipAbout>HeadHunter</TooltipAbout>
            </BtnAbout>
         </AboutInfo>
      </AboutContainer>
   )
}
