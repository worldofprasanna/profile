import React from "react";

const Contact = () => {
  return (
    <section
      className="contact-info-area w-padding2"
      data-background="assets/img/gallery/section_bg04.jpg"
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-7">
            <div className="contact-caption mb-50">
              <h3>If Not Now, When? Let’s Work Together!</h3>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
                Risus commodo viverra.
              </p>
              <img src="assets/img/gallery/sin.png" alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <form action="#" className="contact-wrapper">
              <input type="text" name="name" placeholder="Full Name" />
              <input type="email" name="email" placeholder="Email Address" />
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
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
