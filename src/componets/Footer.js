import React from "react";
import Social from "./Social";
import Email from "./Email";

const Footer = () => {
  return (
    <section className="footer">
      <Email />

      <div className="footer-container">
        <h1 className="logo">LOGO</h1>
        <Social />
      </div>
    </section>
  );
};

export default Footer;
