import React from "react";
import { Rodape, ContainerPortfolio, Portfolio } from "./footerEstilos";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Labedin from "../assets/img/labedin.png";
import Luna from "../assets/img/luna.png";
import Other from "../assets/img/otherside.png";
import Upfour from "../assets/img/upfour.png";

class Footer extends React.Component {
  state = {
    photos: false,
    seta: <ArrowDropDownIcon />,
  };

  ver = () => {
    this.state.photos == false
      ? this.setState({ photos: true,  seta:<ArrowDropUpIcon/> })
      : this.setState({ photos: false, seta: <ArrowDropDownIcon />});
  };

  render() {
    return (
      <Rodape>
        <h2 onClick={this.ver}>PORTFÓLIO {this.state.seta}</h2>
        {this.state.photos == true ? (
          <ContainerPortfolio>
            <a href={"https://zealous-head.surge.sh/"}>
              <Portfolio src={Labedin} />
            </a>
            <a href={"https://lunasocialmedia.araujocoding.repl.co/"}>
              <Portfolio src={Luna} />
            </a>
            <a href={"https://othersidestore.araujocoding.repl.co/"}>
              <Portfolio src={Other} />
            </a>
            <a href={"https://upfour.araujocoding.repl.co/"}>
              <Portfolio src={Upfour} />
            </a>
          </ContainerPortfolio>
        ) : (
          <></>
        )}
      </Rodape>
    );
  }
}

export default Footer;
