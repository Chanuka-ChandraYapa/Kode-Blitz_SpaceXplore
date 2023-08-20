/**
 * The above code is a React component that renders a footer with links and social media icons.
 * @returns The Footer component is returning a JSX structure that represents the footer section of a
 * website. It includes a heading, a list of links, social media icons, and a copyright notice.
 */
import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

// npm install --save @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

const Footer = () => {

  return (
    <footer className="footer-container">
      {/* <div className="base-shape"></div> */}
      <div className="footer-heading">SPACEXPLORE</div>
      <div className="footer-text">
        <div className="footer-links">
          <a href="#" className="footer-link">
            Product
          </a>
          <a href="#" className="footer-link">
            Features
          </a>
          <a href="#" className="footer-link">
            Resources
          </a>
          <a href="#" className="footer-link">
            About
          </a>
          <a href="#" className="footer-link">
            Blog
          </a>
          <a href="#" className="footer-link">
            Support
          </a>
        </div>
      </div>
      <div className="vector"></div>
      <div className="circles">
        <a
          href="https://www.youtube.com"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.instagram.com"
          className="tiktok social"
        >
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>

        {/* <div className="ellipse ellipse-1"></div>
        <div className="ellipse ellipse-2"></div>
        <div className="ellipse ellipse-3"></div>
        <div className="ellipse ellipse-4"></div>
        <div className="ellipse ellipse-5"></div>
        <div className="ellipse ellipse-6"></div> */}
      </div>
      <div className="footer-item">© 2023 Privacy — Terms</div>
    </footer>
  );
};

export default Footer;
