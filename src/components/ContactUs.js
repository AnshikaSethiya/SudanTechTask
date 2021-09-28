import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from './NavBar/NavigationBar'

const ContactUs = () => {
    return (
        <>
            <NavigationBar />
            <Container>
                <h2 className="Contact-head">Sign up to the Tour and travel newsletter</h2>
                <p className="contact-para">Be the first to know when tour and travels opens up for travel, <br/>
                receive partner offers and updates on promotions and events.</p>
            </Container>
        </>
    )
}

export default ContactUs
