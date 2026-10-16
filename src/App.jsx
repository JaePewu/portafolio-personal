import "./App.css";

import TituloSeccion from "./components/atoms/TituloSeccion";
import BotonEnlace from "./components/atoms/BotonEnlace";

function App() {
  return (
    <main className="app">
      <TituloSeccion texto="Jael Yapur CH" />

      <p>Diseño y Desarrollo Web</p>

      <BotonEnlace texto="Ver proyectos" enlace="#proyectos" />
    </main>
  );
}

export default App;
