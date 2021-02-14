import Galeria from "./Componentes/Galeria/Galeria";
import Sobre from "./Componentes/Sobre/Sobre";
import { Container } from "./Estilos/EstiloApp";

function App() {
  return (
    <Container>
      <Sobre />
      <Galeria />
    </Container>
  );
}

export default App;
