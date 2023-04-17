import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        background: ${props => props.theme.colors.background};
        font-size:14px;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;
    }
    body::-webkit-scrollbar {
        width:12px;
    }
    body::-webkit-scrollbar-track {
        background:${props => props.theme.colors.background};
    }
    body::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.highlight};
      }
`
      