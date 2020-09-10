import React, { useState, createRef } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import cogoToast from "cogo-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaError, setRecaptchaError] = useState("");

  const recaptchaRef = createRef();

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
          cogoToast.success("Your message has been sent to Prasanna.", {
            heading: "Thanks",
            position: "top-right",
            hideAfter: 300,
            bar: { size: "10px" },
          });
          recaptchaRef.current.reset();
          setName("");
          setEmail("");
          setMessage("");
          setRecaptchaError("");
        },
        (error) => {
          console.log(error.text);
          if (error?.text === "The g-recaptcha-response parameter not found") {
            setRecaptchaError("Please verify recaptcha");
          } else {
            cogoToast.error("There is some issue in sending the message.", {
              heading: "Error",
              position: "top-right",
              hideAfter: 300,
              bar: { size: "10px" },
            });
          }
        }
      );
  };

  return (
    <section
      className="contact-info-area w-padding2"
      data-background="assets/img/gallery/section_bg04.jpg"
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-7">
            <div className="contact-caption mb-50 section-tittle">
              <h2>Get in touch,</h2>
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
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Ld4k8gZAAAAACkQpsrIh3LzvtIx6CPWiVkBuWmb"
              />
              <span className="text-danger">{recaptchaError}</span>
              <br />
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
