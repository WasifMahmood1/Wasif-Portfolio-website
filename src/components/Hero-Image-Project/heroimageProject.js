import "./heroimageProject.css";
import React from "react";
import heroImageproject from "../../Assets/hero-project.jpg";
import { Link } from "react-router-dom";
const HeroImageProject = () => {
  return (
    <div className="hero1">
      <div className="mask1">
        <img
          className="intro-img1"
          src={heroImageproject}
          alt="heroImageProject"
        />
      </div>
      <div className="content1">
        <h1> PROJECTS.</h1>
        <p>Some of my recent projects</p>
      </div>
    </div>
  );
};

export default HeroImageProject;
