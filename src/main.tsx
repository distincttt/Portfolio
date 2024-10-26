import { createRoot } from 'react-dom/client'

import { App } from './components'

import { GlobalStyle } from './globalStyle'

createRoot(document.getElementById('root')!).render(
   <>
      <GlobalStyle />
      <App />
   </>,
)
