import React, { useState } from "react";

export const InfoFold = (props) => {
  // Estado para rastrear si el primer elemento está abierto
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  return (
    <>
      <div id="info-fold">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>lo que tenés que saber</h2>
                <p>Acá se puede agregar un texto para dar más énfasis a la información del costado</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {props.data && props.data ? (
                  props.data.map((info, index) => (
                    <div className="panel panel-default" key={index}>
                      <div
                        className="panel-heading"
                        role="tab"
                        id={`heading${index}`}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href={`#collapse${index}`}
                            // Aquí comprobamos si es el primer elemento y lo marcamos como abierto
                            aria-expanded={firstItemOpen && index === 0 ? "true" : "false"}
                            aria-controls={`collapse${index}`}
                            // Cuando se hace clic, actualizamos el estado para que solo el primer elemento esté abierto
                            onClick={() => setFirstItemOpen(index === 0)}
                          >
                            {info.title}
                          </a>
                        </h4>
                      </div>
                      <div
                        id={`collapse${index}`}
                        // Agregamos la clase "in" solo si es el primer elemento y está abierto
                        className={`panel-collapse collapse ${firstItemOpen && index === 0 ? "in" : ""}`}
                        role="tabpanel"
                        aria-labelledby={`heading${index}`}
                      >
                        <div className="panel-body">{info.paragraph}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  "cargando"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
