import styled from "styled-components";

export const dark = () => {
  let body = document.querySelector("body");
  body.classList.toggle("darkTheme");

  let icones = document.querySelector(".icones");
  let iconesAprendendo = document.querySelector(".iconesAprendendo");
  let iconesAche = document.querySelector(".iconesAche");

  icones.classList.toggle("dark");
  iconesAprendendo.classList.toggle("dark");
  iconesAche.classList.toggle("dark");
};

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;

@media(max-width:1300px){
  flex-direction:column;
  
}

`;

export const BotaoDark =styled.p`
position:relative;
bottom:360px;
left:0;

@media(max-width:1500px){
  position:absolute;
  bottom:620px;

}


`
