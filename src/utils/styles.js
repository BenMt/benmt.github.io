import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: ${props => props.theme.color.dark};
  }

  body {
    min-width: 100%;
    min-height: 100%;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar,
  -moz-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track,
  -moz-scrollbar {
    width: 6px;
    background: #fff;
  }

  ::selection {
    background: ${props => props.theme.color.main};
    color: ${props => props.theme.color.dark};
  }
  ::-moz-selection {
    background: ${props => props.theme.color.main};
    color: ${props => props.theme.color.dark};
  }
  ::-webkit-scrollbar-thumb, -moz-scrollbar {
    background: ${props => props.theme.color.main};
  }
`

export default GlobalStyle
