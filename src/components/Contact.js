import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        { name, email, message },
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks. Your message has been sent to Prasanna.")
        },
        (error) => {
          console.log(error.text);
          alert("Sorry, there is some issue in sending the message")
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      className="contact-info-area w-padding2"
      data-background="assets/img/gallery/section_bg04.jpg"
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-7">
            <div className="contact-caption mb-50">
              <h3>Get in Touch,</h3>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <form
              action="#"
              className="contact-wrapper"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="text"
                name="name"
                className="border"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                className="border"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                name="message"
                id="message"
                className="border"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div className="g-recaptcha" data-sitekey="6Ld4k8gZAAAAACkQpsrIh3LzvtIx6CPWiVkBuWmb"></div>
              <br/>
              <button className="submit-btn2" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
