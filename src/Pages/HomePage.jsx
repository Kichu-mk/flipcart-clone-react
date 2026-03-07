import React, { Fragment } from 'react';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import Banner from '../Components/Banner';
import Products from '../Components/Products';
import Products2 from '../Components/Products2';
import Offers from '../Components/Offers';
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Categories /> 
            <Banner />
            <Products title={"Offer Products"} />
            <Products2 title={"Latest Mobiles"}/>
            <Offers />
            <Footer />
        </Fragment>
    );
}

export default HomePage;
