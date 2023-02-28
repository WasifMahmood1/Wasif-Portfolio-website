import "./heroimageAbout.css";
import React from "react";
import heroImageAbout from "../../Assets/hero-project.jpg";
const HeroImageAbout = () => {
  return (
    <div className="hero2">
      <div className="mask2">
        <img className="intro-img2" src={heroImageAbout} alt="heroImageAbout" />
      </div>
      <div className="content2">
        <h3>About Me.</h3>
        <h1> Personal Info </h1>
        <p>Get to know more about me</p>
      </div>
    </div>
  );
};

export default HeroImageAbout;
