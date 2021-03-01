import React from "react";
import { Galeria, Imagens, BotaoE, BotaoR } from "./Estilo_Galeria";
import Labedin from "../assets/img/labedin.png";
import Luna from "../assets/img/luna.png";
import Other from "../assets/img/otherside.png";
import Upfour from "../assets/img/upfour.png";
import Back from "../assets/Botoes_imagens/back.svg";
import Next from "../assets/Botoes_imagens/next.svg";

class Gallery extends React.Component {
  state = {
    imagem: Labedin,
    link: "https://zealous-head.surge.sh/",
  };

  esquerda = () => {
    let state = this.state;

    switch (state.imagem) {
      case Labedin:
        state.imagem = Upfour;
        state.link = "https://upfour.araujocoding.repl.co/";
        break;
      case Upfour:
        state.imagem = Other;
        state.link = "https://othersidestore.araujocoding.repl.co/";
        break;
      case Other:
        state.imagem = Luna;
        state.link = "https://lunasocialmedia.araujocoding.repl.co/";
        break;
      default:
        state.imagem = Labedin;
        state.link = "https://zealous-head.surge.sh/";
    }

    this.setState(state);
  };

  direita = () => {
    let state = this.state;
    switch (state.imagem) {
      case Labedin:
        state.imagem = Luna;
        state.link = "https://lunasocialmedia.araujocoding.repl.co/";
        break;
      case Luna:
        state.imagem = Other;
        state.link = "https://othersidestore.araujocoding.repl.co/";
        break;
      case Other:
        state.imagem = Upfour;
        state.link = "https://upfour.araujocoding.repl.co/";
        break;
      default:
        state.imagem = Labedin;
        state.link = "https://zealous-head.surge.sh/";
    }
    this.setState(state);
  };

  render() {
    return (
        <Galeria>
          <BotaoE onClick={this.esquerda}>
            <img src={Back} alt={"back"} />
          </BotaoE>
          <a href={this.state.link} target="_blank">
            <Imagens src={this.state.imagem} alt="upfour" />
          </a>
          <BotaoR onClick={this.direita}>
            <img src={Next} alt={"next"} />
          </BotaoR>
        </Galeria>
    );
  }
}

export default Gallery;
