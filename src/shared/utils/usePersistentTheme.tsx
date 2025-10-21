import { useEffect, useState } from 'react'
import { getSeasonTheme } from '../../shared/utils/getSeasonTheme'
import { ThemeType } from '../../theme'

const THEME_KEY = 'theme'
const THEME_TTL = 1000 * 60 * 60 * 24 * 30 // 30 дней

export const usePersistentTheme = () => {
   const [theme, setTheme] = useState<ThemeType>(() => {
      try {
         const saved = localStorage.getItem(THEME_KEY)
         if (!saved) return getSeasonTheme()

         const parsed = JSON.parse(saved)
         const now = Date.now()

         // если прошло больше месяца — удалить и сбросить на сезонную тему
         if (!parsed.timestamp || now - parsed.timestamp > THEME_TTL) {
            localStorage.removeItem(THEME_KEY)
            return getSeasonTheme()
         }

         return parsed.theme
      } catch {
         return getSeasonTheme()
      }
   })

   useEffect(() => {
      localStorage.setItem(
         THEME_KEY,
         JSON.stringify({
            theme,
            timestamp: Date.now(),
         }),
      )
   }, [theme])

   return [theme, setTheme] as const
}
