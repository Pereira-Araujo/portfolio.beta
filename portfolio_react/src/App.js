import Galeria from "./Componentes/Galeria/Galeria";
import Sobre from "./Componentes/Sobre/Sobre";
import Footer from "./Componentes/Footer/footer";
import { Container, BotaoDark, dark } from "./Estilos/EstiloApp";
import "./App.css";

function App() {
  return (
    <main>
      <BotaoDark onClick={dark}>Dark/Light</BotaoDark>

      <Container>
        <Sobre />
        <Galeria />
      </Container>
      <Footer />
    </main>
  );
}

export default App;
