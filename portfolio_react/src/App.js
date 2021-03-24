import React from "react";
import Galeria from "./Componentes/Galeria/Galeria";
import Sobre from "./Componentes/Sobre/Sobre";
import Footer from "./Componentes/Footer/footer";
import { Container} from "./EstiloApp";
import modoNoturno from "./modoNoturno/modoNoturno"
import IconeSol from '@material-ui/icons/WbSunny';
import IconeLua from '@material-ui/icons/Brightness2Sharp';
import "./App.css";

class App extends React.Component {
  state = {
    boleano: true,
    iconeModo: <IconeLua />
  };

  mudaModo = () => {
    this.setState({ boleano: false })

    if (this.state.boleano !== true) {
      this.setState({ boleano: true })
      this.setState({ iconeModo: <IconeLua /> })

    } else {
      this.setState({ boleano: false })
      this.setState({ iconeModo: <IconeSol /> })

    }
  }

  render() {
    return (
      <main>
        <span onClick={modoNoturno}><div onClick={this.mudaModo}>{this.state.iconeModo}</div></span>

        <Container>
          <Sobre />
          <Galeria />
        </Container>
        <Footer />
      </main>
    );
  }
}

export default App;
