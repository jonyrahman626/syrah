import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import About from '../Components/About/About';
import Products from '../Components/Products/Products';
import Events from '../Components/Events/Events';
import Offer from '../Components/Offer/Offer';
import LatestUpdate from '../Components/LatestUpdate/LatestUpdate';
import Footer from '../Components/Footer/Footer';

const Index = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Products />
            <Events />
            <Offer />
            <LatestUpdate />
            <Footer />
        </div>
    );
}

export default Index;
