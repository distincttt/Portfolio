import { MyPhoto } from '../MyPhoto'

import { Btn, P } from '../../constant/style'
import { AboutInfo, AboutContainer, H2About, H3, Li, Ul } from './AboutStyle'

export const About = (): JSX.Element => {
   return (
      <AboutContainer>
         <MyPhoto page='About' />
         <AboutInfo>
            <H2About>Обо мне</H2About>
            <H3>Frontend Developer</H3>
            <P>Мой технологический стэк: React, TypeScript, Redux Toolkit, styled-components </P>
            <Ul>
               <P>Профессиональные навыки:</P>
               <Li>Умение разбираться в чужом коде; </Li>
               <Li>Исключительно адаптивная и кроссбраузерная верстка; </Li>
               <Li>
                  Понимание базовых принципов разработки пользовательского интерфейса: создание
                  приложений без участия UI дизайнера и готового макета в Figma;
               </Li>
               <Li>
                  Отличное представление сетевого взаимодействия между SPA и бекендом, умение
                  работать с web-сервисами (Web API, REST, JSON);
               </Li>
               <Li>
                  Знание принципов работы бандлеров и пакетных менеджеров, есть опыт сборки
                  pet-проектов на WebPack с использованием и настройкой Prettier, ESLint, Husky,
                  Lint-Staged;
               </Li>
               <Li>Готовность расширять кругозор технологий и узнавать новое.</Li>
            </Ul>

            <Btn href='https://spb.hh.ru/resume/33b6ab07ff096934a50039ed1f734131326768'>
               Ещё обо мне
            </Btn>
         </AboutInfo>
      </AboutContainer>
   )
}
