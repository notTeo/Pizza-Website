import React from 'react'
import { ContactShowcaseContainer, ContactShowcaseButton } from './ContactShowcaseElements';

function ContactShowcase() {

    const h2Style = {
        color: '#FFF',
        fontSize: '2.7rem'
        
    }

    return (

        <div>
            <ContactShowcaseContainer>
                <h1>Is there any problem ?</h1>
                <h2 style={h2Style} >Conatact Us</h2>
            </ContactShowcaseContainer>
        </div>
    )
}

export default ContactShowcase
