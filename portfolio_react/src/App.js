import Galeria from "./Componentes/Galeria/Galeria";
import Sobre from "./Componentes/Sobre/Sobre";
import { Container,BotaoDark } from "./Estilos/EstiloApp";
import "./App.css";

const dark = () => {
  let body = document.querySelector("body");
  body.classList.toggle("darkTheme");

  let icones = document.querySelector(".icones");
  let iconesAprendendo = document.querySelector(".iconesAprendendo");
  let iconesAche = document.querySelector(".iconesAche");

  icones.classList.toggle("dark");
  iconesAprendendo.classList.toggle("dark");
  iconesAche.classList.toggle("dark");
};

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
