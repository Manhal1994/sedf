import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="empty-div"></div>

      <div className="contact-form">
        <h1>Get In Touch</h1>
        <form title="Get In Touch">
          <div className="names">
            <input type="text" placeholder="First Name" value={"First Name"} />
            <input type="text" placeholder="Last Name" value={"First Name"} />
          </div>
          <div className="email-phone">
            <input type="email" placeholder="First Name" value={"email"} />
            <input type="phone" placeholder="Phone No." value={"phone"} />
          </div>
          <textarea
            className="message"
            placeholder="message"
            value={"message"}
          ></textarea>
        </form>
      </div>
    </section>
  );
};

export default Contact;
