import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    background-color: var(--bg-color)
  }

  :root {
    --main-color: #a7727d;
    --secondary-color: #000;
    --bg-color: #d5d5d5;
  }
`
export default GlobalStyle
