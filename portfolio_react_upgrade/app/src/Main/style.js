import styled from 'styled-components'

export const Container = styled.main`
width:100vw;
height:100vh;
display:flex;
justify-content:space-around;

@media(max-width:977px){
    flex-direction:column;
    align-items:center;
}


`