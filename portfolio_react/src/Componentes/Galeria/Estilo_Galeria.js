import styled from "styled-components";

export const Galeria = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Imagens = styled.img`
  width: 60rem;

  @media (max-width: 960px) {
    width: 50rem;
  }
  @media (max-width: 808px) {
    width: 40rem;
  }
  @media (max-width: 646px) {
    width: 35rem;
    margin-top: 8rem;
  }
  @media (max-width: 568px) {
    width: 30rem;
    margin-top: 10rem;
  }
  @media (max-width: 482px) {
    display: none;
  }
`;

export const BotaoE = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  @media (max-width: 482px) {
    display: none;
  }
`;

export const BotaoR = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  @media (max-width: 482px) {
    display: none;
  }
`;
