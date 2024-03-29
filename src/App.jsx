import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { InfoTabs } from "./components/infoTabs";
import { InfoFold } from "./components/infoFold";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import FloatingWhatsApp from "react-floating-whatsapp";
import logo from "./data/logo.png";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation data={landingPageData.Navigation} />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <InfoTabs data={landingPageData.InfoTabs} />
      <InfoFold data={landingPageData.InfoFold} />
      {/* <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
      <FloatingWhatsApp
        phoneNumber={"5491138479173"}
        chatMessage={"Hola 🤝 \n¿Cómo podemos ayudarte?"}
        placeholder={"Escribir mensaje..."}
        darkMode={true}
        statusMessage={"Normalmente responde en 1 hora"}
        avatar={logo}
        accountName={"Manzannabis"}
      />
    </div>
  );
};

export default App;
