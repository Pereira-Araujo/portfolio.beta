import React from "react";
import styled from "styled-components";

import iconeHTML from "../assets/Sobre_imagens/html.png";
import iconeCSS from "../assets/Sobre_imagens/css.png";
import iconeJS from "../assets/Sobre_imagens/javascript.png";
import iconeGithub from "../assets/Sobre_imagens/github.png";
import imagemPerfil from "../assets/Sobre_imagens/araujo.png";
import iconeC from "../assets/Sobre_imagens/c.png";
import iconeReact from "../assets/Sobre_imagens/react.jpg";
import iconeLinkedin from "../assets/Sobre_imagens/linkedin.png";
import iconeRepl from "../assets/Sobre_imagens/repl.png";
import iconeCodePen from "../assets/Sobre_imagens/codepen.png";

import { Icones, FotoPerfil, IconeLink } from "../Props/Icones";
import { Titulo } from "../Props/Titulo";

const ContainerSobre = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 30%;
`;
const SobreColumn = styled.section`
  text-align: center;
`;

class Sobre extends React.Component {
  render() {
    return (
      <ContainerSobre>
        <SobreColumn>
          <FotoPerfil imagemPerfil={imagemPerfil} />

          <article>
            <Titulo titulo={"Adriano P. de Araujo"} />

            <p>
              Olá, meu neu nome é <b>Adriano</b>, sou estudante de programação
              na Labenu! Apaixonado por <b>Front-End!</b>
            </p>
          </article>

          <article>
            <Titulo titulo={"Skills"} />

            <Icones iconeImagem={iconeHTML} />
            <Icones iconeImagem={iconeCSS} />
            <Icones iconeImagem={iconeJS} />
            <Icones iconeImagem={iconeGithub} />
          </article>

          <article>
            <Titulo titulo={"Aprendendo"} />

            <Icones iconeImagem={iconeC} />
            <Icones iconeImagem={iconeReact} />
          </article>

          <article>
            <Titulo titulo={"Me ache:"} />

            <IconeLink
              link={"https://www.linkedin.com/in/araujocode/"}
              descricao={"linkedin"}
              iconeImagemLink={iconeLinkedin}
            />
            <IconeLink
              link={"https://repl.it/@Araujocoding"}
              descricao={"Repl.it"}
              iconeImagemLink={iconeRepl}
            />

            <IconeLink
              link={"https://codepen.io/araujo6_6"}
              descricao={"CodePen"}
              iconeImagemLink={iconeCodePen}
            />
            <IconeLink
              link={"https://github.com/Pereira-Araujo"}
              descricao={"GitHub"}
              iconeImagemLink={iconeGithub}
            />
          </article>
        </SobreColumn>
      </ContainerSobre>
    );
  }
}

export default Sobre;
