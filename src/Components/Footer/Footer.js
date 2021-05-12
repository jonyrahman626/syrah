import React from 'react';
import Footer_bg from '../../Assets/images/banner-bg.jpg';
import Logo from '../../Assets/images/logo.png';
import Map from '../../Assets/images/map-preview.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer class="footer-bg bg_cover" style={{ backgroundImage: `url(${Footer_bg})` }}>
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="footer-logo text-center">
                                    <img src={Logo} alt="logo-white" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-7 pt-30">
                                <div class="footer-contact">
                                    <ul>
                                        <li>
                                            <span class="contact-wrap d-flex align-items-center">
                                                <span class="contact-icon"><i class="fa fa-phone"></i></span>
                                                <span class="contact-text pl-30">
                                                    <span>+880 1245 6987 123</span>
                                                    <span>+880 9876 5489 215</span>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="contact-wrap d-flex align-items-center">
                                                <span class="contact-icon"><i class="fa fa-envelope"></i></span>
                                                <span class="contact-text pl-30">
                                                    <span>syrah@wineshop.com</span>
                                                    <span>wineshop@syrah.com</span>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="contact-wrap d-flex align-items-center">
                                                <span class="contact-icon"><i class="fa fa-globe"></i></span>
                                                <span class="contact-text pl-30">
                                                    <span><a href="index.html">www.syrah-wineshop.com</a></span>
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-5">
                                <div class="footer-nav">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Deal of the Week</a></li>
                                        <li><a href="#">Latest News</a></li>
                                        <li><a href="#">Upcoming Events</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-12">
                                <div class="news-letter">
                                    <form action="/" class="sub-form">
                                        <input type="email" placeholder="Subscribe for Newsletter" />
                                        <button class="sub-btn">Subscribe</button>
                                    </form>
                                </div>
                                <div class="footer-map mt-30">
                                    <img src={Map} alt="map-preview" class="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="bd-top">
                            <div class="row no-gutters">
                                <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                                    <div class="copyright-text">
                                        <p>Copyright © 2019. All rights are reserved</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-5 col-12 text-center text-sm-right pr-0">
                                    <div class="social-nav">
                                        <ul>
                                            <li>
                                                <a href="YOUR_FACEBOOK_LINK"><i class="fa fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="YOUR_TWITTER_LINK"><i class="fa fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="YOUR_LINKEDIN_LINK"><i class="fa fa-linkedin"></i></a>
                                            </li>
                                            <li>
                                                <a href="YOUR_PINTEREST_LINK"><i class="fa fa-pinterest-p"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
