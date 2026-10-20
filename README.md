<p align="center">
  <img src="./public/avatar_jae_readme.png" alt="Avatar chibi de Jael" width="150" />
</p>

<h1 align="center">Portafolio Personal</h1>
<p align="center"><strong>Jael Yapur CH</strong> · Desarrollo Web</p>

Portafolio personal desarrollado para la asignatura **Desarrollo Full Stack II** de **DUOC UC**. Aquí presento mi perfil, experiencia, formación y algunos de los proyectos en los que he trabajado.

El sitio fue construido con **React, Vite y Ant Design**, utilizando la metodología **Atomic Design** para organizar sus componentes.

## Índice <!-- omit in toc -->

- [Sobre el proyecto](#sobre-el-proyecto)
- [Secciones](#secciones)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Comandos disponibles](#comandos-disponibles)
- [Pruebas automatizadas](#pruebas-automatizadas)
- [Proyectos destacados](#proyectos-destacados)
- [Contacto](#contacto)

## Sobre el proyecto

Es una aplicación web de una sola página (_Single Page Application_) con diseño adaptable a computador, tablet y celular. Su objetivo es presentar mi trayectoria y reunir mis proyectos de desarrollo en un mismo lugar.

La navegación permite acceder a las diferentes secciones. Además, incorpora un menú móvil, un filtro de proyectos por categoría, un botón para descargar mi CV y un botón para volver al inicio.

## Secciones

- **Inicio:** presentación personal y descarga del CV.
- **Sobre mí:** fotografía y descripción profesional.
- **Experiencia:** trayectoria laboral y proyectos formativos, con cargos y fechas.
- **Educación y certificaciones:** estudios, cursos y certificaciones.
- **Proyectos:** galería con imágenes, tecnologías, categorías y enlaces a GitHub.
- **Contacto:** correo, redes profesionales y formulario con validación.
- **Footer:** información de contacto y año actual generado automáticamente.

> **Importante:** el formulario valida los datos en el navegador y muestra una confirmación, pero **no envía correos electrónicos**. Para contactarme, se puede utilizar el correo o las redes profesionales.

## Tecnologías utilizadas

| Tecnología                         | Uso                                                     |
| ---------------------------------- | ------------------------------------------------------- |
| **React**                          | Construcción de la interfaz mediante componentes.       |
| **JavaScript**                     | Lógica, manejo de datos y eventos.                      |
| **Vite**                           | Desarrollo local y compilación del proyecto.            |
| **Ant Design y Ant Design Icons**  | Componentes visuales, formularios, navegación e íconos. |
| **CSS**                            | Estilos personalizados y diseño responsive.             |
| **Vitest y React Testing Library** | Pruebas de componentes y formularios.                   |
| **Oxlint**                         | Revisión del código.                                    |

## Estructura del proyecto

La aplicación sigue **Atomic Design**, que permite separar componentes según su función y complejidad:

```text
portafolio-personal/
├── public/
│   ├── avatar_jae.png
│   ├── proyectos/
│   └── CV_Jael_Yapur_CH.pdf
├── src/
│   ├── assets/images/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   │   └── pages/
│   ├── data/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

- **Átomos:** componentes básicos, como títulos, botones e imagen de perfil.
- **Moléculas:** tarjetas y elementos de experiencia, estudios, proyectos y certificaciones.
- **Organismos:** secciones completas, Navbar, formulario y Footer.
- **Plantilla:** `PortafolioTemplate`, que organiza las secciones de la página.
- **Página:** `HomePage`, que incorpora los datos del portafolio.

Los datos de perfil, experiencia, estudios, certificaciones y proyectos se encuentran separados en `src/data/`.

Para la interacción se utilizan **`useState`** (por ejemplo, menú, filtro y formulario) y **`useEffect`** (actualización de la navegación y del título de la página).

## Instalación y ejecución

**Requisitos:** tener instalados **Node.js**, **npm** y **Git**.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/JaePewu/portafolio-personal.git
   ```

2. Entrar a la carpeta:

   ```bash
   cd portafolio-personal
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar la aplicación:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección que indique Vite en la terminal (generalmente `http://localhost:5173/`).

## Comandos disponibles

| Comando                 | Descripción                                 |
| ----------------------- | ------------------------------------------- |
| `npm run dev`           | Inicia el servidor de desarrollo.           |
| `npm run build`         | Genera la versión de producción en `dist/`. |
| `npm run preview`       | Permite visualizar la versión compilada.    |
| `npm run test -- --run` | Ejecuta todas las pruebas una vez.          |
| `npm run lint`          | Revisa el código con Oxlint.                |

## Pruebas automatizadas

El proyecto utiliza **Vitest** y **React Testing Library** para comprobar el renderizado de componentes y secciones principales, además de validar el funcionamiento del formulario y el filtro de proyectos.

Para ejecutar todas las pruebas:

```bash
npm run test -- --run
```

Para revisar el código y comprobar que la aplicación compile correctamente:

```bash
npm run lint
npm run build
```

## Proyectos destacados

| Proyecto                            | Categoría  | Código / demostración                                                                              |
| ----------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| **EGB Digital**                     | Full Stack | [GitHub](https://github.com/JaePewu/egb-digital) · [Sitio web](https://egb-digital-mu.vercel.app/) |
| **Data Lovers — League of Legends** | Front-End  | [GitHub](https://github.com/JaePewu/Data-lovers-LOL)                                               |
| **GourmetHub**                      | Front-End  | [GitHub](https://github.com/JaePewu/Proyecto-GourmetHub)                                           |
| **TechStore — API REST en la nube** | Backend    | [GitHub](https://github.com/JaePewu/techstore)                                                     |
| **Ecommerce Jae**                   | Full Stack | [GitHub](https://github.com/JaePewu/catalogo-ecommerce-django)                                     |
| **Burger Queen**                    | Front-End  | [GitHub](https://github.com/JaePewu/burger-queen-LJ)                                               |

## Contacto

**Jael Yapur CH**

- **GitHub:** [JaePewu](https://github.com/JaePewu)
- **LinkedIn:** [Jael Yapur CH](https://www.linkedin.com/in/jael-yapur-ch/)

---

<p align="center">Proyecto académico desarrollado para Desarrollo Full Stack II · DUOC UC 🌷</p>
