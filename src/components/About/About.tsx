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
   PAbout,
} from './AboutStyle'

export const About = (): JSX.Element => {
   return (
      <AboutContainer>
         <MyPhoto src={'images/myPhoto2.png'} />
         <AboutInfo>
            <H2About>Обо мне</H2About>
            <H3>Frontend Developer</H3>
            <PAbout>Мой технологический стэк: </PAbout>
            <PAbout>React, TypeScript, Redux Toolkit, styled-components</PAbout>
            <AboutInfoWrapper>
               {infosAbout.map(({ name, lis, btn }, key) => (
                  <AboutInfoUlWrapper key={key}>
                     <Ul>
                        <P>{name}</P>
                        {lis.map((li, key) => (
                           <Li key={key}>
                              <LabelAbout>
                                 <IAbout className='bx bx-chevron-right'></IAbout>
                                 {li}
                              </LabelAbout>
                           </Li>
                        ))}
                     </Ul>
                     {btn && (
                        <BtnAbout
                           href={
                              btn.href ||
                              'https://spb.hh.ru/resume/33b6ab07ff096934a50039ed1f734131326768'
                           }
                           target='_blank'
                        >
                           {btn.text || 'Ещё обо мне'}
                           <TooltipAbout>{btn.tooltipText || 'HeadHunter'}</TooltipAbout>
                        </BtnAbout>
                     )}
                  </AboutInfoUlWrapper>
               ))}
            </AboutInfoWrapper>
         </AboutInfo>
      </AboutContainer>
   )
}
