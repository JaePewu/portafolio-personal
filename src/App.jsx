import "./App.css";

import TituloSeccion from "./components/atoms/TituloSeccion";
import BotonEnlace from "./components/atoms/BotonEnlace";
import ImagenPerfil from "./components/atoms/ImagenPerfil";

import SeccionEstudios from "./components/organisms/SeccionEstudios";

import SeccionProyectos from "./components/organisms/SeccionProyectos";
import SeccionExperiencia from "./components/organisms/SeccionExperiencia";

import fotoPerfil from "./assets/images/perfil.jpg";

import { proyectos } from "./data/proyectos";
import { experiencias } from "./data/experiencias";
import { estudios } from "./data/estudios";

function App() {
  return (
    <main className="app">
      <TituloSeccion texto="Jael Yapur CH" />

      <p>Diseño y Desarrollo Web</p>

      <ImagenPerfil imagen={fotoPerfil} alt="Fotografía de Jael Yapur CH" />

      <BotonEnlace texto="Ver proyectos" enlace="#proyectos" />

      <SeccionExperiencia experiencias={experiencias} />

      <SeccionEstudios estudios={estudios} />

      <SeccionProyectos proyectos={proyectos} />
    </main>
  );
}

export default App;
