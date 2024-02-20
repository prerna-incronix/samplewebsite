import React from 'react';
import './Footer.css';
import GooglePlayBadge from './assets/pngs/google-play-badge.png';
import PolishLogo from './assets/pngs/polish-logo.png'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer id="footer">
      <div className="polish-logo">
            <img src={PolishLogo} alt="Polish Logo" />
          </div>
          
        <div className="container">
          {/* Polish logo */}
          <div className="footer-content">
            <div className="footer-column" style={{ marginLeft: '50px' }}>
              <h2>Contact Us</h2>
              <p>Email: example@example.com</p>
              <p>Phone: +123 456 789</p>
            </div>
            
            <div className="footer-column">
              <h2>Useful Links</h2>
              <ul>
                <li><Link to ='/home'>Home</Link></li>
                <li><Link to='/eyewear'>Eyewear</Link></li>
                <li><Link to='/sunglass'>Sunglass</Link></li>
                <li><Link to='/About'>Explore Us</Link></li>
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
              <svg viewBox="0 0 100 100" version="1.1">
    <path
        fill="currentColor"
        d="M98.5 50c0-27.6-22.4-50-50-50S-2.5 22.4-2.5 50c0 25.7 18.9 47.1 43.5 51v-36.1H25.8V50H41V38.8c0-12.8 6.7-20.1 20-20.1 5.7 0 11.2.9 11.2.9v12.3h-6.3c-6.2 0-8.2 3.8-8.2 7.7V50h13.9l-2.2 14.9h-11.7V101c24.6-3.9 43.5-25.3 43.5-51z"
    ></path>
</svg>



            </a>
            <div className="tooltip">Spotify</div>
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


        <ul className="example-1">
          <li className="icon-content">
            <a
              className="link"
              data-social="telegram"
              aria-label="Telegram"
              href="https://www.telegram.com/"
            >
              <svg viewBox="0 0 100 100" version="1.1">
                <path
                  fill="currentColor"
                  d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
                ></path>
              </svg>
            </a>
            <div className="tooltip">Telegram</div>
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
