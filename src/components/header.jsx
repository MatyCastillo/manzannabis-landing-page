import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro introImg ">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Cargando..."}
                  <span></span>
                </h1>
                <p className="subTitle">
                  {props.data ? props.data.subTitle : "Cargando..."}
                </p>
                <p>{props.data ? props.data.paragraph : "Cargando..."}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  INSCRIBITE
                </a>{" "}
              </div>
            </div>
          </div>
          <div class="diagonal-separator"></div>
        </div>
      </div>
    </header>
  );
};
