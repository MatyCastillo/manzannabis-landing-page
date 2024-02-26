import React, { useState } from "react";

export const Navigation = (props) => {
  const [hovered, setHovered] = useState(false);

  // Función para manejar el evento onMouseEnter
  const handleMouseEnter = () => {
    setHovered(true);
  };

  // Función para manejar el evento onMouseLeave
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getImageSrc = () => {
    const logo = props.data ? props.data.logo : ""//Espera la imagen
    const logoHover = props.data ? props.data.logoHover : ""
    return hovered ? logoHover : logo;
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          {/* <a className="navbar-brand page-scroll" href="#page-top">
          <img className="navbar-brand-img" src="../img/logo-manzannabis.png" alt="Logo Manzannabis" />
          </a>{" "} */}
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            onMouseEnter={handleMouseEnter} // Cuando el mouse entra en el elemento
            onMouseLeave={handleMouseLeave} // Cuando el mouse sale del elemento
          >
            <img
              className="navbar-brand-img"
              src={getImageSrc()}
              alt="Logo Manzannabis"
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
              Quienes somos
              </a>
            </li>
            <li>
              <a href="#ours" className="page-scroll">
              Lo nuestro
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
              GENÉTICAS VERANO 24
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
              Soporte Legal
              </a>
            </li>
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
              CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
