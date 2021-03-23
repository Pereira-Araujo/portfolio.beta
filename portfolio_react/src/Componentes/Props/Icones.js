import React from "react";
import styled from "styled-components";

const IconeHabilidade = styled.img`
  width: 3rem;

`;

const FotoPerfilTamanho = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
`;
export const Icones = (props) => {
  return <IconeHabilidade src={props.iconeImagem} />;
};

export const FotoPerfil = (props) => {
  return <FotoPerfilTamanho src={props.imagemPerfil} />;
};

export const IconeLink = (props) => {
  return (
    <a href={props.link} alt={props.descricao} target="_blank">
      <IconeHabilidade src={props.iconeImagemLink} />
    </a>
  );
};

