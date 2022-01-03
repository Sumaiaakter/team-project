import React from 'react';
import Announcement from '../components/Announcement';
import AwesomeFeatures from '../components/AwesomeFeatures';
import Footer from '../components/Footer';
import LatestProducts from '../components/LatestProducts';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import Services from '../components/Services';
import Slider from '../components/Slider';

const Home = () => {


    return (
        <div>
            <Announcement />
            <NavBar></NavBar>
            <Slider />
            <Products />
            <Services />
            <LatestProducts />
            <AwesomeFeatures />
            <Footer />
        </div>
    );
};

export default Home;