import { Btn, I, P } from '../../constant/style'

import { MyPhoto } from '../MyPhoto'

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
               Я начинающий frontend разработчик, имею большой индивидуальный опыт создания
               приложений. Есть огромное желание и целеустремленность развиваться в Frontend
               разработке. Слежу за физическим и ментальным здоровьем. В работе frontend
               разработчика я смог совместить две вещи, которые интересуют меня всю жизнь - дизайн и
               программирование.
            </P>
            <BtnSciWrapper>
               <Btn href='pdf/CV.pdf' download>
                  Скачать CV
               </Btn>
               <SciWrapper>
                  <A href='https://github.com/distincttt?tab=repositories' target='_blank'>
                     <I className='bx bxl-github' />
                     <TooltipHome>Github</TooltipHome>
                  </A>
                  <A href='https://t.me/distincttt' target='_blank'>
                     <I className='bx bxl-telegram' />
                     <TooltipHome>Telegram</TooltipHome>
                  </A>
                  <A href='mailto:ilushakuzmin7@gmail.com' target='_blank'>
                     <I className='bx bxl-gmail' />
                     <TooltipHome>Gmail</TooltipHome>
                  </A>
               </SciWrapper>
            </BtnSciWrapper>
         </HomeInfo>
         <MyPhoto page={'Home'} />
      </HomeContainer>
   )
}
