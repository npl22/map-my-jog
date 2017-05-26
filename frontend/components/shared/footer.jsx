import React from 'react';

const Footer = () => (
  <footer>
    <div className="container nav-links-container">
                    <div className="phone">
                        <img className="phone-img" src="//dxcqr918aoy1x.cloudfront.net/prod/public/images/footer2017/i-phone.7aa7d28555e0.png" />
                    </div>
                    <div className="links-container">
                        <ul className="links-col">
                            <li className="link-header">Social</li>
                            <li>
                                <a className="link" href="#">
                                  Like us on Facebook
                                </a>
                            </li>
                            <li>
                                <a className="link" href="#">
                                    Follow us on Twitter
                                </a>
                            </li>
                            <li>
                                <a className="link" href="#">
                                    MapMyRun Blog
                                </a>
                            </li>
                        </ul>
                        <ul className="links-col">
                            <li className="link-header">Help</li>
                            <li><a className="link" href="#">Log In / Register</a></li>
                            <li>
                                <a className="link" href="#">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a className="link" target="_blank" rel="noopener noreferrer" href="#">
                                    Developer / API
                                </a>
                            </li>
                        </ul>
                        <ul className="links-col">
                            <li className="link-header">About Us</li>
                            <li>
                                <a className="link" href="#">
                                    Advertise
                                </a>
                            </li>
                            <li>
                                <a className="link" href="#">
                                    Join Our Team
                                </a>
                            </li>
                            <li>
                                <a className="link" href="#">
                                    Shop Under Armour
                                </a>
                            </li>
                        </ul>
                        <ul className="links-col app-links-col">
                            <li className="link-header link-header-desktop">UA Fitness Community</li>
                            <li className="link-header link-header-mobile">The World's Largest Fitness Community</li>
                            <li className="app-link-container">
                                <a className="app-link" target="_blank" rel="noopener noreferrer" href="#">
                                    <i className="app-icon record-icon"></i>
                                </a>
                                <a className="app-link" target="_blank" rel="noopener noreferrer" href="#">
                                    <i className="app-icon endo-icon"></i>
                                </a>
                                <a className="app-link" target="_blank" rel="noopener noreferrer" href="#">
                                    <i className="app-icon mfp-icon"></i>
                                </a>
                                <a className="app-link" target="_blank" rel="noopener noreferrer" href="#">
                                    <i className="app-icon mmf-icon"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
  </footer>
);

export default Footer;
