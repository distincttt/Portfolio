export const springTheme = {
   name: 'Весна 🌸',
   navBgColor: 'rgba(255, 255, 255, .1)',
   bgColor: 'rgba(0, 20, 0, 1);',
   secondBgColor: 'rgba(0, 25, 0, 1)',
   thirdBgColor: '#2F4F4F',
   mainColor: '#00FF7F',
   whiteColor: '#fff',
   tabListColor: '#5F9EA0',
}

export const summerTheme = {
   name: 'Лето ☀️',
   navBgColor: 'rgba(255, 255, 255, .15)',
   bgColor: 'rgba(0, 80, 30, 1)',
   secondBgColor: 'rgba(0, 90, 40, 1)',
   thirdBgColor: '#2E8B57',
   mainColor: '#00FF7F',
   whiteColor: '#fff',
   tabListColor: '#20B2AA',
}

export const autumnTheme = {
   name: 'Осень 🍂',
   navBgColor: 'rgba(255, 255, 255, .1)',
   bgColor: 'rgba(50, 20, 0, 1)',
   secondBgColor: 'rgba(60, 25, 0, 1)',
   thirdBgColor: '#8B4513',
   mainColor: '#FFA500',
   whiteColor: '#fff',
   tabListColor: '#CD853F',
}

export const winterTheme = {
   name: 'Зима ❄️',
   navBgColor: 'rgba(255, 255, 255, .2)',
   bgColor: 'rgba(0, 20, 40, 1)',
   secondBgColor: 'rgba(0, 25, 60, 1)',
   thirdBgColor: '#2F4F4F',
   mainColor: '#00FFFF',
   whiteColor: '#fff',
   tabListColor: '#4682B4',
}

export type ThemeType = typeof springTheme

export const themes: Record<string, ThemeType> = {
   spring: springTheme,
   summer: summerTheme,
   autumn: autumnTheme,
   winter: winterTheme,
}
