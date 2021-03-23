import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { useState } from 'react';
import './PizzaProducts.css'
import Products from './Products';
import Feature from './Feature';
import Footer from './Footer';
import { productData,  productDataThree } from './Products/data';


function PizzaProducts() {

    const [isOpen, setIsOpen] = useState(false);

     const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="PizzaProducts-container">
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Feature />
            <Products heading='Choose your favorite' data={productData} />
            <Products data={productDataThree} />
            <Footer />
        </div>    
)
}

export default PizzaProducts
