import React from 'react';
import EventsBack from '../../Assets/images/event-bg.jpg';
import SingleEvent from '../../Assets/images/single-event-bg.jpg';
import './Events.css';

const Events = () => {
    return (
        <div>
            <section className="event-area bg_cover pt-60 pb-65" style={{backgroundImage: `url(${EventsBack})`}}>
                <div className="container px-lg-0">
                    <div className="row">
                        <div className="col-lg-12 pb-8 text-center">
                            <div className="section-title full-sec">
                                <h2 className="orange-color">Upcoming Events</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4 mt-30 offset-0 text-center">
                            <div className="single-event">
                                <div className="event-img">
                                    <img src={SingleEvent} alt="" />
                                </div>
                                <div className="event-bdr">
                                    <div className="event-cont">
                                        <span>26</span>
                                        <h3>October</h3>
                                        <span className="time">09:00 A.M - 08:00 P.M</span>
                                        <p>International Victory Day</p>
                                        <span className="price">$99.33</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-30 text-center">
                            <div className="single-event">
                                <div className="event-img">
                                    <img src={SingleEvent} alt="" />
                                </div>
                                <div className="event-bdr">
                                    <div className="event-cont">
                                        <span>26</span>
                                        <h3>October</h3>
                                        <span className="time">09:00 A.M - 08:00 P.M</span>
                                        <p>International Victory Day</p>
                                        <span className="price">$99.33</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-30 text-center">
                            <div className="single-event">
                                <div className="event-img">
                                    <img src={SingleEvent} alt="" />
                                </div>
                                <div className="event-bdr">
                                    <div className="event-cont">
                                        <span>26</span>
                                        <h3>October</h3>
                                        <span className="time">09:00 A.M - 08:00 P.M</span>
                                        <p>International Victory Day</p>
                                        <span className="price">$99.33</span>
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

export default Events;
