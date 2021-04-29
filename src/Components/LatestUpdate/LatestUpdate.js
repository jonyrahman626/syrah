import React from 'react';
import LatestBg from '../../Assets/images/updates-bg.jpg';
import Update1 from '../../Assets/images/updates-img-1.jpg';
import Update2 from '../../Assets/images/updates-img-2.jpg';
import './LatestUpdate.css';

const LatestUpdate = () => {
    return (
        <div>
            <section className="updates-area bg_cover pt-80 pb-80" style={{backgroundImage: `url(${LatestBg})`}}>
                <div className="container px-lg-0">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="updates-text">
                                <div className="section-title side-title">
                                    <h2 className="theme-color">Latest Updates</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisig elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                {/* <div className="slide-buttons">
                                    <button className="slide-btn arrow-left">
                                        <i className="fa fa-arrow-left"></i>
                                    </button>
                                    <button className="slide-btn arrow-right">
                                        <i className="fa fa-arrow-right"></i>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row updates-slide">
                                <div className="col-lg-6">
                                    <div className="single-updates">
                                        <div className="updates-content">
                                            <div className="updates-img">
                                                <img src={Update1} alt="updates-img" className="w-100 img-fluid" />
                                            </div>
                                            <div className="updates-post-text">
                                                <div className="post-time text-center">
                                                    <span className="mr-15">Posted by : Admin</span>
                                                    <span>Date : 26 October 2019</span>
                                                </div>
                                                <h3>Lorem ipsum dolor sitvctetur adipisicing eled doeiusmod.</h3>
                                                <p>Lorem ipsum dolor sitvctetur adipisicing eled doeiusmod. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-updates">
                                        <div className="updates-content">
                                            <div className="updates-img">
                                                <img src={Update2} alt="updates-img" className="w-100 img-fluid" />
                                            </div>
                                            <div className="updates-post-text">
                                                <div className="post-time text-center">
                                                    <span className="mr-15">Posted by : Sajjad</span>
                                                    <span>Date : 26 October 2019</span>
                                                </div>
                                                <h3>Lorem ipsum dolor sitvctetur adipisicing eled doeiusmod.</h3>
                                                <p>Lorem ipsum dolor sitvctetur adipisicing eled doeiusmod. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6">
                                    <div className="single-updates">
                                        <div className="updates-content">
                                            <div className="updates-img">
                                                <img src="assets/images/updates/updates-img-1.jpg" alt="updates-img" className="w-100 img-fluid" />
                                            </div>
                                            <div className="updates-post-text">
                                                <div className="post-time text-center">
                                                    <span className="mr-15">Posted by : Admin</span>
                                                    <span>Date : 26 October 2019</span>
                                                </div>
                                                <h3>Lorem ipsum dolor sitvctetur adipisicing eled doeiusmod.</h3>
                                                <p>Lorem ipsum dolor sitvctetur adipisicing eled doeiusmod. Lorem ipsum dolor sit amet consectetur
                                                adipisicing.</p>
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LatestUpdate;
