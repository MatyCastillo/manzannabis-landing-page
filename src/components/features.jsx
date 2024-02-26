import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center ">
      <div className="imgBackgroundStatic">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>GENÉTICAS VERANO 24</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-lg-4">
                  {" "}
                  <img src={d.img} alt="" />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <div className="diagonal-separator"></div>
      </div>
    </div>
  );
};
