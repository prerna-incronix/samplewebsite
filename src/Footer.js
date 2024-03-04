import React from "react";
import "./Footer.css";
import GooglePlayBadge from "./assets/pngs/google-play-badge.png";
import IncronixFooterLogo from "./assets/pngs/incronix.png";
import { Link } from "react-router-dom";
import IncronixLogo from "./assets/pngs/incronix.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer id="footer">
        {/* <div className="polish-logo">
            <img src={PolishLogo} alt="Polish Logo" />
          </div> */}

        <div className="container">
          {/* Polish logo */}
          <div className="footer-content">
            <div className="footer-column">
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <Link to="/home" onClick={scrollToTop}>Home</Link>
                </li>
                <li>
                  <Link to="/CategoryCatalogue" onClick={scrollToTop}>Eyewear</Link>
                </li>
                <li>
                  <Link to="/SunglassCatalogue" onClick={scrollToTop}>Sunglass</Link>
                </li>
                <li>
                  <Link to="/About" onClick={scrollToTop}>About</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h2>Follow Us</h2>
              <div className="social-icons">
                <ul className="example-1">
                  <li className="icon-content">
                    <a
                      className="link"
                      data-social="telegram"
                      aria-label="Facebook"
                      href="https://www.facebook.com/"
                    >
                      <svg viewBox="0 0 500 500" version="1.1" >
                        <path
                          fill="currentColor" 
                          d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.7 226.4 209.3 245V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V501C413.3 482.4 504 379.8 504 256z"
                        ></path>
                      </svg>
                    </a>
                    <div className="tooltip">Facebook</div>
                  </li>
                  {/* Repeat the same structure for other social media icons */}
                </ul>

                <ul className="example-1">
                  <li className="icon-content">
                    <a
                      className="link"
                      data-social="pinterest"
                      aria-label="Instagram"
                      href="https://www.instagram.com/"
                    >
                      <svg viewBox="0 0 450 450" version="1.1">
                        <path
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        ></path>
                      </svg>
                    </a>
                    <div className="tooltip">Instagram</div>
                  </li>
                  {/* Repeat the same structure for other social media icons */}
                </ul>

                
              </div>
            </div>
            
            {/* Google Play badge */}
            <div className="google-play-badge">
              <a href="https://play.google.com/store">
                <img src={GooglePlayBadge} alt="Google Play Badge" />
              </a>
            </div>
          </div>
          <hr></hr>
          <div className="copyright-text">
            ©COPYRIGHT 2024 | Polish Eyewear Powered By{" "}
              <a
                href="https://incronix.com/"
                className="highlight-link"
                target="_blank"
              >
                <img src={IncronixFooterLogo} alt = "Incronix" className="powered-by-logo"/>
              </a>
            
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
