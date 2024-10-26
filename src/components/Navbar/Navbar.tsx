import { Lis } from '../../shared/types'

import { I } from '../../constant/style'
import { Li, NavbarWrapper, TooltipNavbar, Ul } from './NavbarStyle'

interface NavbarProps {
   lis: Lis
   onClick: (key: number) => void
}

export const Navbar = ({ lis, onClick }: NavbarProps): JSX.Element => {
   return (
      <NavbarWrapper>
         <Ul>
            {lis.map(({ name, className, active }, key) => (
               <Li key={key} $active={active} onClick={() => onClick(key)}>
                  <I className={className}></I>
                  <TooltipNavbar>{name}</TooltipNavbar>
               </Li>
            ))}
         </Ul>
      </NavbarWrapper>
   )
}
