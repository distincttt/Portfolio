import { autumnTheme, springTheme, summerTheme, ThemeType, winterTheme } from '../../theme'

export const getSeasonTheme = (): ThemeType => {
   const month = new Date().getMonth() + 1

   if (month >= 3 && month <= 5) return springTheme
   if (month >= 6 && month <= 8) return summerTheme
   if (month >= 9 && month <= 11) return autumnTheme
   return winterTheme
}
