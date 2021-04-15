import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import About from '../Components/About/About';
import Products from '../Components/Products/Products';
import Events from '../Components/Events/Events';

const Index = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Products />
            <Events />
        </div>
    );
}

export default Index;
