import React from 'react';

const Footer = () => (
  <div>
    <footer>
      <div className="phone">
        <img className="phone-img" src="https://res.cloudinary.com/nathanpli/image/upload/v1495765311/phone_shfazn.png" />
      </div>

      <div className="links-container">
        <ul className="links-col">
          <li className="link-header">Social</li>
          <li><a className="link" href="#">Like us on Facebook</a></li>
          <li><a className="link" href="#">Follow us on Twitter</a></li>
          <li><a className="link" href="#">MapMyRun Blog</a></li>
        </ul>
        <ul className="links-col">
          <li className="link-header">Help</li>
          <li><a className="link" href="#">Log In / Register</a></li>
          <li><a className="link" href="#">Support</a></li>
          <li><a className="link" href="#">Developer / API</a></li>
        </ul>
        <ul className="links-col">
          <li className="link-header">About Us</li>
          <li><a className="link" href="#">Advertise</a></li>
          <li><a className="link" href="#">Join Our Team</a></li>
          <li><a className="link" href="#">Shop Under Armour</a></li>
        </ul>
      </div>
      <div className="app-links-container">
        <ul className="links-col">
          <li className="link-header app-link-header">UA Fitness Community</li>
          <div className="app-links">
            <li className="app-icon record-icon" href="#"></li>
            <li className="app-icon endo-icon" href="#"></li>
            <li className="app-icon mfp-icon" href="#"></li>
            <li className="app-icon mmf-icon" href="#"></li>
          </div>
        </ul>
      </div>
    </footer>

    <div className="copyright">
      <div className="copyright-text">
          <span>
            © {new Date().getFullYear()} MapMyJog® All rights reserved
          </span>
      </div>

      <div className="copyright-link-container">
        <a className="copyright-link" href="#">Privacy Policy</a>
        <a className="copyright-link" href="#">Terms of Use</a>
        <a className="copyright-link copyright-link-noborder" >AdChoices</a>
      </div>
    </div>
  </div>
);

export default Footer;
