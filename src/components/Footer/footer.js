import "./footer.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Lahore Punjab, Pakistan</p>
            </div>
          </div>
          <div>
            <FaPhone size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>+92-322-493-8986</p>
            </div>
          </div>
          <div className="link">
            <FaMailBulk
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>wasifkhalid12@gmail.com</p>
            </div>
          </div>
          <Link className="link" to="/contact">
            <button className="btn ">Contact</button>
          </Link>
        </div>
        <div className="right">
          <h2 className="AboutMe">About me</h2>
          <p>
            This is me Wasif Mahmood, an Software Engineer and a Mern Stack
            Developer.I have expertise in Mern Stack and enjoy doing the
            projects challenges
          </p>
          <div className="social">
            <a href="https://github.com/WasifMahmood1">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/wasif-mahmood-449977189/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
