import { Tabs } from '../shared/types'

export const tabInitial: Tabs = [
   { name: 'Главная', className: 'bx bx-home alt', active: true, rotate: 'rotateY(0deg)' },
   { name: 'Обо мне', className: 'bx bx-user', active: false, rotate: 'rotateY(-90deg)' },
   { name: 'Резюме', className: 'bx bx-detail', active: false, rotate: 'rotateY(-180deg)' },
   {
      name: 'Портфолио',
      className: 'bx bx-briefcase',
      active: false,
      rotate: 'rotateY(-270deg)',
   },
]
