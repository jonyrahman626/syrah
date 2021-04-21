import React from 'react';
import offerImg from '../../Assets/images/offer-img.png';
import './Offer.css';

const Offer = () => {
    return (
        <div>
            <section className="offer-part pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5">
                            <div className="offer-img">
                                <img src={offerImg} alt="offer-img" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="offer-content">
                                <div className="section-title side-title text-center text-md-left">
                                    <h2 className="theme-color">Deal of the Week</h2>
                                </div>
                                <div className="offer-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat.</p>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident.</p>
                                </div>
                                <div className="count-down-clock">
                                    <div className="row count">
                                        <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                                            <div className="single-count">
                                                <span className="days">00</span>
                                                <p>Days</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                                            <div className="single-count">
                                                <span className="hours">00</span>
                                                <p>hours</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                                            <div className="single-count">
                                                <span className="minutes">00</span>
                                                <p>minutes</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                                            <div className="single-count bd-none">
                                                <span className="seconds">00</span>
                                                <p>seconds</p>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Offer;
