import React from 'react';
import BannerBg from '../../Assets/images/banner-bg.jpg';
import BannerVector from '../../Assets/images/banner-vector.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section className="banner-area bg_cover" style={{ backgroundImage:`url(${BannerBg})` }}>
                <div className="container banner-wrap px-lg-0">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="banner-text">
                                <span>Since 1986</span>
                                <h1>Syrah</h1>
                                <p className="text-space">A Brand of Taste</p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                                </p>
                                <a href="#" className="theme-btn">Explore more</a>
                            </div>
                        </div>
                        <div className="col-lg-7 d-none d-lg-block">
                            <div className="banner-right">
                                <img src={BannerVector} alt="banner-vector" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;
