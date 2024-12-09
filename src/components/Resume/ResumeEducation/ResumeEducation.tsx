import { H4EducationAndSkills, TabGrid, TabItem } from '../../../constant/style'
import {
   IResumeEducation,
   LabelResumeEducation,
   Li,
   PResumeEducation,
   Ul,
} from './ResumeEducationStyle'

export const ResumeEducation = ({ active }: { active: boolean }): JSX.Element => {
   return (
      <TabGrid $active={active}>
         <TabItem>
            <H4EducationAndSkills>2016-2017</H4EducationAndSkills>
            <H4EducationAndSkills>Курсы по программированию</H4EducationAndSkills>
            <H4EducationAndSkills>ИТМО, Программирование</H4EducationAndSkills>
            <PResumeEducation>
               Прошёл базовый курс обучения программы профессиональной подготовки по профессии
               "Оператор электронно-вычислительных и вычислительных машин", изучил следующие
               предметы:
               <Ul>
                  <Li>
                     <LabelResumeEducation>
                        <IResumeEducation className='bx bx-chevron-right'></IResumeEducation>
                        Введение в ИТ;
                     </LabelResumeEducation>
                  </Li>
                  <Li>
                     <LabelResumeEducation>
                        <IResumeEducation className='bx bx-chevron-right'></IResumeEducation>
                        Основы архитектуры ПК;
                     </LabelResumeEducation>
                  </Li>
                  <Li>
                     <LabelResumeEducation>
                        <IResumeEducation className='bx bx-chevron-right'></IResumeEducation>
                        Математические и логические основы представления цифровой и электронной
                        информации и её обработки;
                     </LabelResumeEducation>
                  </Li>
                  <Li>
                     <LabelResumeEducation>
                        <IResumeEducation className='bx bx-chevron-right'></IResumeEducation>
                        Принципы построения устройств управления ЭВМ;
                     </LabelResumeEducation>
                  </Li>
                  <Li>
                     <LabelResumeEducation>
                        <IResumeEducation className='bx bx-chevron-right'></IResumeEducation>
                        Работа с электронными текстовыми документами, таблицами, презентациями;
                     </LabelResumeEducation>
                  </Li>
                  <Li>
                     <LabelResumeEducation>
                        <IResumeEducation className='bx bx-chevron-right'></IResumeEducation>
                        Основы конструирования и диаграммирования;
                     </LabelResumeEducation>
                  </Li>
                  <Li>
                     <LabelResumeEducation>
                        <IResumeEducation className='bx bx-chevron-right'></IResumeEducation>
                        Основы проектирования и реализации визуальных компьютерных моделей;
                     </LabelResumeEducation>
                  </Li>
                  <Li>
                     <LabelResumeEducation>
                        <IResumeEducation className='bx bx-chevron-right'></IResumeEducation>
                        Основы разработки интерактивных приложений.
                     </LabelResumeEducation>
                  </Li>
               </Ul>
            </PResumeEducation>
         </TabItem>
         <TabItem>
            <H4EducationAndSkills>2019-2023</H4EducationAndSkills>
            <H4EducationAndSkills>Высшее образование </H4EducationAndSkills>
            <H4EducationAndSkills>ГУАП, 09.03.02</H4EducationAndSkills>
            <PResumeEducation>
               Институт Информационных систем и технологий является ведущим в университете в области
               компьютерных наук и их приложений. Там я изучил основы программирования на различных
               языках, базы данных, моделирование и дизайн, углубился в изучение физики и
               математики. Это мне позволило стать специалистом в области вычислительных машин,
               комплексов, систем и сетей, программного обеспечения вычислительной техники и
               автоматизированных систем, математического обеспечения и администрирования
               информационных систем, математического моделирования, информатики и вычислительной
               техники, электронных устройств и систем. Обучение в институте сочетает все аспекты
               подготовки в области IT – от микропроцессорных систем до виртуальной и дополненной
               реальности.
            </PResumeEducation>
         </TabItem>
      </TabGrid>
   )
}
