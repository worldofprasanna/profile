import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send();
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
              <h3>Feel free to reach out to me for,</h3>
              <p>
                <ul>
                  <li>
                    - Any Consulting work on Cloud | Kubernetes | Distributed
                    Systems
                  </li>
                  <li>- To quickly build a MVP for your awesome idea</li>
                  <li>
                    - Showcase your Product | Tool. I am happy to take a look at
                    it
                  </li>
                </ul>
              </p>
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
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
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
