import { createGlobalStyle } from 'styled-components'
import { reset as styleReset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  // Reset CSS
  ${styleReset}

  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

`

export default GlobalStyle
