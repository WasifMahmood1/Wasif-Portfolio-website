import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import HeroImageProject from "../Hero-Image-Project/heroimageProject";
import Work from "./Work/work";
const project = () => {
  return (
    <div>
      <Navbar />
      <HeroImageProject />
      <Work />
      <Footer />
    </div>
  );
};

export default project;
