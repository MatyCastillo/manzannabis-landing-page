import React from "react";

export const About = (props) => {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <div className="zoom-container">
                <img
                  src="./img/nosotros-manzannabis.jpg"
                  className="img-responsive zoomable-image"
                  alt=""
                />{" "}
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Quienes Somos</h2>
                <p>{props.data ? props.data.paragraph : "cargando..."}</p>
                {/* <h3>Why Choose Us?</h3> */}
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "cargando"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "cargando"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
