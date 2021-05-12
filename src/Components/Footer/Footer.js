import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer-bg bg_cover" style="background: url(assets/images/footer/footer-bg.jpg);">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="footer-logo text-center">
                                    <img src="assets/images/logo/logo.png" alt="logo-white" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-7 pt-30">
                            <div class="footer-contact">
                            <ul>
                                <li>
                                <span class="contact-wrap d-flex align-items-center">
                                    <span class="contact-icon">
                                    <i class="fa fa-phone"></i>
                                    </span>
                                    <span class="contact-text pl-30">
                                    <span>+880 1245 6987 123</span>
                                    <span>+880 9876 5489 215</span>
                                    </span>
                                </span>
                                </li><!-- contact-wrap -->
                                <li>
                                <span class="contact-wrap d-flex align-items-center">
                                    <span class="contact-icon">
                                    <i class="fa fa-envelope"></i>
                                    </span>
                                    <span class="contact-text pl-30">
                                    <span>syrah@wineshop.com</span>
                                    <span>wineshop@syrah.com</span>
                                    </span>
                                </span>
                                </li><!-- contact-wrap -->
                                <li>
                                <span class="contact-wrap d-flex align-items-center">
                                    <span class="contact-icon">
                                    <i class="fa fa-globe"></i>
                                    </span>
                                    <span class="contact-text pl-30">
                                    <span><a href="index.html">www.syrah-wineshop.com</a></span>
                                    </span>
                                </span>
                                </li><!-- contact-wrap -->
                            </ul>
                            </div>
                        </div><!-- footer-contact -->
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
                        </div><!-- footer-nav -->
                        <div class="col-lg-5 col-md-12">
                            <div class="news-letter">
                            <form action="#" class="sub-form">
                                <input type="email" placeholder="Subscribe for Newsletter">
                                <button class="sub-btn">Subscribe</button>
                            </form>
                            </div><!-- news-letter -->
                            <div class="footer-map mt-30">
                            <img src="assets/images/footer/map-preview.jpg" alt="map-preview" class="w-100">
                            </div>
                        </div><!-- footer-widget -->
                        </div><!-- row -->
                    </div><!-- container -->
                    </div><!-- footer-top -->
                    <div class="copyright-area">
                    <div class="container">
                        <div class="bd-top">
                        <div class="row no-gutters">
                            <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                            <div class="copyright-text">
                                <p>Copyright © 2019. All rights are reserved</p>
                            </div>
                            </div><!-- copyright text -->
                            <div class="col-lg-6 col-md-6 col-sm-5 col-12 text-center text-sm-right pr-0">
                            <div class="social-nav">
                                <ul>
                                <li>
                                    <a href="YOUR_FACEBOOK_LINK">
                                    <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="YOUR_TWITTER_LINK">
                                    <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="YOUR_LINKEDIN_LINK">
                                    <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="YOUR_PINTEREST_LINK">
                                    <i class="fa fa-pinterest-p"></i>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </div><!-- social-nav -->
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
