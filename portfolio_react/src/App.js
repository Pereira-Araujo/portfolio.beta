import Galeria from "./Componentes/Galeria/Galeria";
import Sobre from "./Componentes/Sobre/Sobre";
import { Container, BotaoDark, dark} from "./Estilos/EstiloApp";
import "./App.css";


function App() {
  return (
    <Container>
      <BotaoDark onClick={dark}>Dark/Light</BotaoDark>
      <Sobre />
      <Galeria />
    </Container>
  );
}

export default App;
