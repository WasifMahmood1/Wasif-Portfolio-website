import "./heroimageContact.css";
import React from "react";
import heroImageproject from "../../Assets/hero-project.jpg";
const HeroImageProject = () => {
  return (
    <div className="hero3">
      <div className="mask3">
        <img
          className="intro-img3"
          src={heroImageproject}
          alt="heroImageProject"
        />
      </div>
      <div className="content3">
        <h1> Contact.</h1>
        <p>Lets have some chat</p>
      </div>
    </div>
  );
};

export default HeroImageProject;
