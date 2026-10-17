import "./App.css";

import SeccionPersonal from "./components/organisms/SeccionPersonal";
import SeccionExperiencia from "./components/organisms/SeccionExperiencia";
import SeccionEstudios from "./components/organisms/SeccionEstudios";
import SeccionProyectos from "./components/organisms/SeccionProyectos";
import Navbar from "./components/organisms/Navbar";

import { perfil } from "./data/perfil";
import { experiencias } from "./data/experiencias";
import { estudios } from "./data/estudios";
import { proyectos } from "./data/proyectos";

function App() {
  return (
    <>
      <header className="portada">
        <Navbar />

        <SeccionPersonal perfil={perfil} />
      </header>

      <main className="app">
        <SeccionExperiencia experiencias={experiencias} />

        <SeccionEstudios estudios={estudios} />

        <SeccionProyectos proyectos={proyectos} />
      </main>
    </>
  );
}

export default App;
