import { useState } from 'react'
import { Navbar } from '../Navbar'
import { Wrapper } from '../Wrapper'

export const App = (): JSX.Element => {
   const [lis, setLis] = useState([
      { name: 'Главная', className: 'bx bx-home alt', active: true, rotate: 'rotateY(0deg)' },
      { name: 'Обо мне', className: 'bx bx-user', active: false, rotate: 'rotateY(-90deg)' },
      { name: 'Резюме', className: 'bx bx-detail', active: false, rotate: 'rotateY(-180deg)' },
      {
         name: 'Портфолио',
         className: 'bx bx-briefcase',
         active: false,
         rotate: 'rotateY(-270deg)',
      },
   ])

   const onClick = (key: number) => {
      setLis(
         lis.map((li, idx) => (idx === key ? { ...li, active: true } : { ...li, active: false })),
      )
   }

   return (
      <>
         <Wrapper lis={lis} />
         <Navbar lis={lis} onClick={onClick} />
      </>
   )
}
