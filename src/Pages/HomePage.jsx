import React, { Fragment } from 'react';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Categories /> 
        </Fragment>
    );
}

export default HomePage;
