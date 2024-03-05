import React, { useState } from "react";

export const InfoFold = ({ data }) => {
  const [openItems, setOpenItems] = useState(data ? data.map(() => false) : []);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    const newOpenItems = openItems.map((item, i) => i === index ? !item : item);
    setOpenItems(newOpenItems);
    setActiveIndex(index);
  };

  if (!data || data.length === 0) {
    return <div>No hay datos disponibles</div>;
  }

  return (
    <>
      <div id="info-fold">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>lo que tenés que saber</h2>
                <p>
                  Acá se puede agregar un texto para dar más énfasis a la
                  información del costado
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {data.map((info, index) => (
                  <div className="panel panel-default" key={index}>
                    <div
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href={`#collapse${index}`}
                      aria-expanded={openItems[index] ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                      onClick={() => handleItemClick(index)}
                      className={`panel-heading ${activeIndex === index ? 'active' : ''}`}
                      id={`heading${index}`}
                    >
                      <h4 className="panel-title">
                        {info.title}
                      </h4>
                    </div>
                    <div
                      id={`collapse${index}`}
                      className={`panel-collapse collapse ${
                        openItems[index] ? "in" : ""
                      }`}
                      role="tabpanel"
                      aria-labelledby={`heading${index}`}
                    >
                      <div className="panel-body">{info.paragraph}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
