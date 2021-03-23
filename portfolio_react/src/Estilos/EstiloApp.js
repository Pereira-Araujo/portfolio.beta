import styled from "styled-components";

export const dark = () => {
  let body = document.querySelector("body");
  body.classList.toggle("darkTheme");

  let icones = document.querySelector(".icones");
  let iconesAprendendo = document.querySelector(".iconesAprendendo");
  let iconesAche = document.querySelector(".iconesAche");
  let setaIr = document.querySelector(".setaIr")
  let setaVoltar = document.querySelector(".setaVoltar")

  icones.classList.toggle("dark");
  iconesAprendendo.classList.toggle("dark");
  iconesAche.classList.toggle("dark");
  setaIr.classList.toggle("dark")
  setaVoltar.classList.toggle("dark")

};

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`

export const BotaoDark = styled.p`
font-weight:bold;
`;
