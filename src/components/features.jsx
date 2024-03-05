// import React from "react";

// export const Features = (props) => {
//   return (
//     <div id="features" className="text-center ">
//       <div className="imgBackgroundStatic">
//         <div className="container">
//           <div className="col-md-10 col-md-offset-1 section-title">
//             <h2>GENÉTICAS VERANO 24</h2>
//           </div>
//           <div className="row">
//             {props.data
//               ? props.data.map((d, i) => (
//                   <div key={`${d.title}-${i}`} className="col-xs-12 col-lg-4">
//                     {" "}
//                     <img src={d.img} alt="" />
//                     <h3>{d.title}</h3>
//                     <div className="list-style">
//                     <ul>
//                       {props.data
//                         ? props.data[i].list.map((d, i) => (
//                             <li key={`${d}-${i}`}> {d}</li>
//                           ))
//                         : "cargando"}
//                     </ul>
//                     </div>
//                   </div>
//                 ))
//               : "Loading..."}
//           </div>
//         </div>
//         <div className="diagonal-separator"></div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import CountUp from "react-countup";

export const Features = (props) => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImageIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredImageIndex(null);
  };

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
                    <div
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}
                      style={{ position: "relative" }}
                    >
                      <img src={d.img} alt="" style={{ width: "100%" }} />
                      {hoveredImageIndex === i && (
                        <div className="text-in-image">
                          <div className="text-pos1">
                            <div>
                            <div style={{ display: "inline-block" }}>
                                <div style={{ display: "inline-block" }}>
                                  <CountUp end={props.data[i].imgData[0]} duration={0.5}></CountUp> %
                                </div>
                              </div>
                              <div>THC</div>
                            </div>
                          </div>

                          <div className="text-pos2">
                            <div>
                              <div style={{ display: "inline-block" }}>
                                <div style={{ display: "inline-block" }}>
                                  0.
                                </div>
                                <div style={{ display: "inline-block" }}>
                                  <CountUp end={props.data[i].imgData[1]} duration={0.5}></CountUp> %
                                </div>
                              </div>
                              <div>CBD</div>
                            </div>
                          </div>
                          <div className="text-pos3">
                            <div>
                            <div style={{ display: "inline-block" }}>
                                <div style={{ display: "inline-block" }}>
                                  <CountUp end={props.data[i].imgData[2]} duration={0.5}></CountUp> %
                                </div>
                              </div>
                              <div>Sativa</div>
                            </div>
                          </div>
                          <div className="text-pos4">
                            <div>
                            <div style={{ display: "inline-block" }}>
                                <div style={{ display: "inline-block" }}>
                                  <CountUp end={props.data[i].imgData[3]} duration={0.5}></CountUp> %
                                </div>
                              </div>
                              <div>Indica</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <h3>{d.title}</h3>
                    <div className="list-style">
                      <ul>
                        {props.data
                          ? props.data[i].list.map((d, i) => (
                              <li key={`${d}-${i}`}> {d}</li>
                            ))
                          : "Cargando..."}
                      </ul>
                    </div>
                  </div>
                ))
              : "Cargando..."}
          </div>
        </div>
        <div className="diagonal-separator"></div>
      </div>
    </div>
  );
};
