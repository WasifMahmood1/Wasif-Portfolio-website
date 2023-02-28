import "./aboutContent.css";
import React from "react";
import { Link } from "react-router-dom";
const AboutContent = () => {
  return (
    // <div className="about">
    //   <div className="left">
    //     <p>
    //       My name is Wasif Mahmood and I'm a passionate Mern Stack Developer
    //       using web technologies to build amazing products and websites and
    //       focusing on solving problems for different industries using power of
    //       technology.
    //     </p>
    //     <p>
    //       I will love to hear from you. Whether it's a job, project, oppertunity
    //       or just a chat. Feel free to contact me!
    //     </p>
    //     <Link to="/contact">
    //       <button className="btn">Contact</button>
    //     </Link>
    //   </div>
    //   <div className="right">
    //     <div>
    //       <h1>Skills</h1>
    //       <div className="skills">
    //         <p>HTML CSS React Javascript Node PostgreSQL GitHub Jira</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="aboutt">
      <div className="aboutt-container">
        <div className="left">
          <p>
            My name is Wasif Mahmood and I'm a passionate Mern Stack Developer
            using web technologies to build amazing products and websites and
            focusing on solving problems for different industries using power of
            technology.
          </p>
          <p>
            I will love to hear from you. Whether it's a job, project,
            oppertunity or just a chat. Feel free to contact me!
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
          <h1>Skills</h1>
          <div className="skills">
            <p>HTML CSS React Javascript Node PostgreSQL GitHub Jira</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
