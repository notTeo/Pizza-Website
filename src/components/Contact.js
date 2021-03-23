import React from 'react'
import './Contact.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { useState } from 'react';
import Footer from './Footer';
import ContactShowcase from './ContactShowcase';
import { Link } from 'react-router-dom'


function Contact() {

    const [isOpen, setIsOpen] = useState(false);

     const toggle = () => {
        setIsOpen(!isOpen);
    };

    const NavStyle = {
        backgroundColor: '#150f0f'
    }

    return (
        
        <div className="contact-container">
            <div style={NavStyle}>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            </div>
            <ContactShowcase />
            <div className="contact-info-form">
                <div  className="contact-info">
                    <h2>Phone</h2>
                    <p>555-555-5555</p>
                    <h2>Address</h2>
                    <p>2177  Goff Avenue</p>
                    <h2>Email</h2>
                    <Link>contact@example.com</Link>
                </div >
                <div className="contact-form">
                    <h1>Contact</h1>
                    <form action="">
                        <div>
                            <input type="text" placeholder="Full-Name"/>
                        </div>
                        <div>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div>
                            <textarea name="msg" col="110" rows="7" placeholder="Messege" ></textarea>
                        </div>
                        <button type="submit">Send Messege</button>
                    </form>
                </div >
            </div>    
            <Footer />
        </div>
    )
}

export default Contact
