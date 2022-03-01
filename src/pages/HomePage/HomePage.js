import React from "react";
import styles from "./HomePage.module.css";
import Hero from "layouts/HomePage_Layouts/Hero/Hero";
import About from "layouts/HomePage_Layouts/About/About";
import NFTS from "layouts/HomePage_Layouts/NFTS/NFTS";
import Cards from "layouts/HomePage_Layouts/Cards/Cards";
import Project from "layouts/HomePage_Layouts/Project/Project";
import Help from "layouts/HomePage_Layouts/Help/Help";
import Team from "layouts/HomePage_Layouts/Team/Team";
import FAQ from "layouts/HomePage_Layouts/FAQ/FAQ";
import Story from "layouts/HomePage_Layouts/Story/Story";
import Roadmap from "layouts/HomePage_Layouts/Roadmap/Roadmap";

import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <NFTS />
      <Cards />
      <Project />
      <Help />
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="story">
        <Story />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
