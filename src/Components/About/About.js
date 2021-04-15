import React from 'react';
import AboutImg from '../../Assets/images/about-image.png';
import './About.css';

const About = () => {
    return (
        <div>
            <section className="about-area pt-100 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="about-img">
                                <img src={AboutImg} alt="about-image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text">
                                <div className="section-title side-title text-center text-md-left">
                                <h2 className="orange-color">Our Story</h2>
                                </div>
                                <p>
                                This article is about wine produced from grapes. For other
                                types, see Non-grape wine.Hellenistic mosaics discovered close
                                to the city of Paphos depicting Dionysos, god of wine.
                                </p>
                                <p>
                                Wine boy at a Greek symposium The earliest archaeological
                                evidence of wine produced from grapes has been found at sites in
                                China (c. 7000 BC), Georgia (c. 6000 BC), Lebanon (c. 5000 BC),
                                Iran (c. 5000 BC), Greece (c. 4500 BC), and Sicily (c. 4000 BC).
                                The oldest extant evidence of wine production has been found in
                                Armenia (c. 4100 BC).
                                </p>
                                <a href="#" className="theme-btn">Explore more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
