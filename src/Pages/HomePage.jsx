import React, { Fragment } from 'react';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import Banner from '../Components/Banner';
import Products from '../Components/Products';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Categories /> 
            <Banner />
            <Products title={"Offer Products"} />
        </Fragment>
    );
}

export default HomePage;
