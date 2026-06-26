import { MyPhoto } from '../MyPhoto'

import { scis } from '../../constant/scis'

import { Btn, I, P } from '../../constant/style'
import {
   A,
   BtnSciWrapper,
   HomeContainer,
   H1,
   H3,
   HomeInfo,
   SciWrapper,
   TooltipHome,
} from './HomeStyle'

export const Home = (): JSX.Element => {
   return (
      <HomeContainer>
         <HomeInfo>
            <H3>Привет, Я</H3>
            <H1>Илья Кузьмин</H1>
            <H3>Frontend Developer</H3>
            <P>
               Более чем 5-летним коммерческим опытом. Специализируюсь на разработке и архитектуре
               веб-приложений, уделяю внимание производительности, масштабируемости и качеству кода.
            </P>
            <BtnSciWrapper>
               <Btn href='images/CV.png' download>
                  Скачать CV
               </Btn>
               <SciWrapper>
                  {scis.map(({ href, className, name }, key) => (
                     <A key={key} href={href} target='_blank'>
                        <I className={className} />
                        <TooltipHome>{name}</TooltipHome>
                     </A>
                  ))}
               </SciWrapper>
            </BtnSciWrapper>
         </HomeInfo>
         <MyPhoto src={'images/myPhoto.png'} />
      </HomeContainer>
   )
}
