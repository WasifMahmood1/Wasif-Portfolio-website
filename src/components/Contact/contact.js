import React from "react";
import HeroImageContact from "../Hero-Image-Contact/heroimageContact";
import Navbar from "../Navbar/navbar";
import Form from "./Contact-Form/contact-form";
import Footer from "../Footer/footer";
const contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImageContact />
      <Form />
      {/* <Footer /> */}
    </div>
  );
};

export default contact;
