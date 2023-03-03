import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      {/* <Link to="/">
        <h1 className="portfolio">Portfolio.</h1>
      </Link> */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" className="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="Home">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="Home">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="Home">
            About
          </Link>
        </li>
        <li>
          <a
            href="Wasif-ASE.pdf"
            download="Wasif-Resume"
            className="btn1 btn1-light"
          >
            Resume Download
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
