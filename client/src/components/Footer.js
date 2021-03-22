import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="row">
          <div className="col-sm-6 col-md-4 footer-navigation">
            <h3>
              <a href="#">
                BBB<span>ootstrap</span>
              </a>
            </h3>
            <p className="links">
              <a href="#">Home</a>
              <strong> · </strong>
              <a href="#">Blog</a>
              <strong> · </strong>
              <a href="#">Pricing</a>
              <strong> · </strong>
              <a href="#">About</a>
              <strong> · </strong>
              <a href="#">Faq</a>
              <strong> · </strong>
              <a href="#">Contact</a>
            </p>
            <p className="company-name">BBBOOTSTRAP.COM © 2020</p>
          </div>
          <div className="col-sm-6 col-md-4 footer-contacts">
            <div>
              <span className="fa fa-map-marker footer-contacts-icon"> </span>
              <p>
                <span className="new-line-span">
                  Résidence Chadha Azhar, Rue Yahya Ben Tamim
                </span>
                Soukra, Tunisie.
              </p>
            </div>
            <div>
              <i className="fa fa-phone footer-contacts-icon"></i>
              <p className="footer-center-info email text-left">
                {" "}
                +216 94 103 403
                <br />+216 75 276 828
              </p>
            </div>
            <div>
              <i className="fa fa-envelope footer-contacts-icon"></i>
              <p>
                {" "}
                <a href="#" target="_blank">
                  contact@sesameac.com
                </a>
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="col-md-4 footer-about">
            <h4>About the company</h4>
            <p>
              BBBootstrap.com is one of the leading website for bootstrap
              snippets.
            </p>
            <div className="social-links social-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
