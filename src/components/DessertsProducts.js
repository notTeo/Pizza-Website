import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { useState } from 'react';
import './PizzaProducts.css'
import Products from './Products';
import Footer from './Footer';
import { productDataTwo,  productDataFour } from './Products/data';
import FeatureDesserts from './FeatureDesserts';

function DessertsProducts() {

    const [isOpen, setIsOpen] = useState(false);

     const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="PizzaProducts-container">
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <FeatureDesserts />
            <Products heading='Choose your favorite' data={productDataTwo} />
            <Products data={productDataFour} />
            <Footer />
        </div>    
    );
}

export default DessertsProducts
