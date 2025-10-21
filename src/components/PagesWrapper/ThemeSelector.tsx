import React, { useState } from 'react'

import {
   Dropdown,
   DropdownItem,
   SelectorButton,
   ThemeSelectorContainer,
} from './ThemeSelectorStyle'

import { themes, ThemeType } from '../../theme'

interface ThemeSelectorProps {
   theme: ThemeType
   setTheme: (theme: ThemeType) => void
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ theme, setTheme }) => {
   const [open, setOpen] = useState(false)

   const handleThemeChange = (key: string) => {
      const selected = themes[key]
      if (selected) {
         setTheme(selected)
         setOpen(false)
      }
   }

   return (
      <ThemeSelectorContainer>
         <SelectorButton onClick={() => setOpen(!open)}>{theme.name}</SelectorButton>

         <Dropdown $open={open}>
            {Object.entries(themes).map(([key, th]) => (
               <DropdownItem key={key} onClick={() => handleThemeChange(key)}>
                  {th.name}
               </DropdownItem>
            ))}
         </Dropdown>
      </ThemeSelectorContainer>
   )
}
