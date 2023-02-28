import React from "react";
import Navbar from "../Navbar/navbar";
import HeroImageAbout from "../Hero-Image-About/heroimageAbout";
import AboutContent from "./About-Content/aboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImageAbout />
      <AboutContent />
    </div>
  );
};

export default About;
