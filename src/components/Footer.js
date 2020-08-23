import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* <!-- Footer Start--> */}
      <div className="footer-area">
        <div className="container">
          <div className="footer-top footer-padding">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="footer-top-cap text-center">
                  <img src="assets/img/logo/logo2_footer.png" alt="" />
                  <span>
                    <a href="/">Twitter | Medium | Toptal | LinkedIn | Dev.to</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-xl-9 col-lg-8">
                <div className="footer-copy-right">
                  {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com">Colorlib</a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End--> */}
    </footer>
  );
};

export default Footer;
