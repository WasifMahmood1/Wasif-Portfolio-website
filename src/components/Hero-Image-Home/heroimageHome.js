import "./heroimageHome.css";
import React from "react";
import heroImage from "../../Assets/home.jpg";
import { Link } from "react-router-dom";
const heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={heroImage} alt="heroImage" />
      </div>
      <div className="content">
        <p>Hello there!</p>
        <h1>I am Wasif Mahmood.</h1>
        <h1>I am a Mern Stack Developer</h1>
        <div className="links">
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default heroimage;
