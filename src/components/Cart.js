import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { useState } from 'react';


function Cart() {
    const [isOpen, setIsOpen] = useState(false);

     const toggle = () => {
        setIsOpen(!isOpen);
    };

    const NavStyle = {
        backgroundColor: '#150f0f'
    }

    return (
        <>
            <div className="cart-container">
                <Navbar />
                <Sidebar isOpen={isOpen} toggle={toggle} /> 
                <Footer />
            </div>
        </>
    )
}

export default Cart
