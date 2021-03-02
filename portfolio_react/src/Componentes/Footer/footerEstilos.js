import styled from "styled-components"

export const Rodape = styled.section`
  height: 4rem;
  display: flex;
  align-items: flex-end;
  display: none;
  > h2 {
    text-align: center;
  }
  @media (max-width: 482px) {
    margin-top: 12rem;
    display: inherit;
  }
`;

export const Portfolio = styled.img`
width:26rem;
margin-top:1rem;
border-radius:2%;

@media(max-width:362px){
    width:20rem;
}

`
export const ContainerPortfolio = styled.section`
display:flex;
flex-direction:column;
align-items:center;`