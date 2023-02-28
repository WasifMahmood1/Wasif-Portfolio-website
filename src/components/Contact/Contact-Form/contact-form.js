import "./contact-form.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form action="https://formspree.io/f/moqzwvaw" method="POST">
        <input
          type="text"
          id="name"
          name="username"
          placeholder="Name"
          required
          autoComplete="off"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          autoComplete="off"
        />
        <textarea
          rows="6"
          name="message"
          placeholder="Type message here"
          id="message"
          autoComplete="off"
          required
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
