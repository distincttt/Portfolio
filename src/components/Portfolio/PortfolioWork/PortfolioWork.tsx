import { works } from '../../../constant/works'

import { PPortfolio } from '../PortfolioStyle'
import {
   A,
   H4PortfolioWork,
   IconBox,
   Img,
   ImgBox,
   Info,
   IPortfolioWork,
   TabGridPortfolioWork,
   TabItemPortfolioWork,
   Tech,
   TooltipPortfolioWork,
} from './PortfolioWorkStyle'

export const PortfolioWork = ({ active }: { active: boolean }): JSX.Element => {
   return (
      <TabGridPortfolioWork $active={active}>
         {works.map(({ name, img, tech, hrefGithub, hrefDeploy }, key) => (
            <TabItemPortfolioWork key={key}>
               <ImgBox>
                  <Img src={`images/${img}.jpg`} alt='Проект 1' />
               </ImgBox>
               <Info>
                  <H4PortfolioWork>{name}</H4PortfolioWork>
                  <Tech>
                     <PPortfolio>{tech}</PPortfolio>
                  </Tech>
                  <IconBox>
                     <A href={hrefDeploy} target='_blank'>
                        <IPortfolioWork className='bx bxs-hand-up'></IPortfolioWork>
                        <TooltipPortfolioWork>Preview</TooltipPortfolioWork>
                     </A>
                     <A href={hrefGithub} target='_blank'>
                        <IPortfolioWork className='bx bxl-github'></IPortfolioWork>
                        <TooltipPortfolioWork>Github Repository</TooltipPortfolioWork>
                     </A>
                  </IconBox>
               </Info>
            </TabItemPortfolioWork>
         ))}
      </TabGridPortfolioWork>
   )
}
