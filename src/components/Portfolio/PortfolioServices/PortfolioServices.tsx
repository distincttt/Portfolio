import { services } from '../../../constant/services'

import { P } from '../PortfolioStyle'
import {
   H4PortfolioServices,
   IconBox,
   IPortfolioServices,
   TabGridPortfolioServices,
   TabItemPortfolioServices,
} from './PortfolioServicesStyle'

export const PortfolioServices = ({ active }: { active: boolean }): JSX.Element => {
   return (
      <TabGridPortfolioServices $active={active}>
         {services.map(({ name, text, icon }, key) => (
            <TabItemPortfolioServices key={key}>
               <IconBox>
                  <IPortfolioServices className={icon}></IPortfolioServices>
               </IconBox>
               <H4PortfolioServices>{name}</H4PortfolioServices>
               <P>{text}</P>
            </TabItemPortfolioServices>
         ))}
      </TabGridPortfolioServices>
   )
}
