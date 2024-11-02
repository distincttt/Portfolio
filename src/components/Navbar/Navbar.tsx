import { Tabs } from '../../shared/types'

import { I } from '../../constant/style'
import { Li, NavbarWrapper, TooltipNavbar, Ul } from './NavbarStyle'

interface NavbarProps {
   tabs: Tabs
   onClick: (key: number) => void
}

export const Navbar = ({ tabs, onClick }: NavbarProps): JSX.Element => {
   return (
      <NavbarWrapper>
         <Ul>
            {tabs.map(({ name, className, active }, key) => (
               <Li key={key} $active={active} onClick={() => onClick(key)}>
                  <I className={className}></I>
                  <TooltipNavbar>{name}</TooltipNavbar>
               </Li>
            ))}
         </Ul>
      </NavbarWrapper>
   )
}
