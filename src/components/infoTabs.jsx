import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const InfoTabs = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log(props);
  return (
    <div id="infoTabs">
      <div className="container">
        <h2>REPROCANN</h2>
        <p>
          Cada paciente debe tener el <strong>REPROCANN</strong> listo para ser
          vinculado o en trámite.
        </p>
        {props.data ? (
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              {props.data.map((item, index) => (
                <Tab key={index}>{item.title}</Tab>
              ))}
            </TabList>
            {props.data.map((item, index) => (
              <TabPanel key={index}>
                {item.paragraph}
                <div className="about-text">
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {props.data
                          ? item.list.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {props.data
                          ? item.list2.map((d, i) => (
                              <li key={`${d}-${i}`}> {d}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};
