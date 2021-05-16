import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
       
        transition: 0.1s;
        text-decoration:none;
        
    } 
   
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};        
    }
    h1 {
        color: ${(props) => props.theme.titles};
        
    }
    .icons {
        color: ${(props) => props.theme.text};
        filter ${(props) => props.theme.filter}

    }

    .blocks{
        background:${(props) => props.theme.blockColor};
        color :${(props) => props.theme.text}
    }
`
