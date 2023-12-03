import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans">123 Gourmet Avenue, Culinary Metropolis</p>
        <p className="p__opensans">(+48)721-343-699</p>
        <p className="p__opensans">(+48)721-545-688</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gourmet} alt="footer_logo" />
        <p className="p__opensans">
          The best way to find yourself is to lose yourself in the service of
          others
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/epicureansymphony">
            <FiFacebook />
          </a>
          <a href="https://www.twitter.com/epicureansymph">
            <FiTwitter />
          </a>
          <a href="https://www.instagram.com/epicureansymphony">
            <FiInstagram />
          </a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">07:00 am - 11:00 am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Satyam. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
