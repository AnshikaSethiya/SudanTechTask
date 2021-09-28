import React,{useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import NavigationBar from './NavBar/NavigationBar'
import './contactUs.style.css'

const ContactUs = () => {

    const [newsletter, setNewsletter] = useState({
        username:"",
        email:"",
        Address:"",
        phone:""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setNewsletter({...newsletter, [name]:value});
    }
    return (
        <>
            <NavigationBar />
            <Container>
                <div className="contact">
                <h2 className="Contact-head">Sign up to the Tour and travel newsletter</h2>
                <p className="contact-para">Be the first to know when tour and travels opens up for travel, <br/>
                receive partner offers and updates on promotions and events.</p>
                <br />
                <br />
               <Form className="form-news">
                   <div>
                       <label htmlFor="username">Your Name: </label><br />
                       <input type="text" autoComplete="off"
                          placeholder="Your Name"
                          value={newsletter.username}
                          onChange={handleInput}
                          name="username" id="username" />
                   </div>
                    <br />
                   <div>
                       <label htmlFor="email">Email: </label><br />
                       <input type="email" autoComplete="off"
                       placeholder="Email"
                          value={newsletter.email}
                          onChange={handleInput}
                          name="email" id="email" />
                   </div>
                    <br />
                   <div>
                       <label htmlFor="Address">Address: </label><br />
                       <input type="text" autoComplete="off"
                          value={newsletter.Address}
                          onChange={handleInput}
                          placeholder="Address"
                          name="Address" id="Address" />
                   </div>
                    <br />
                   <div>
                       <label htmlFor="Address">Contact Number: </label><br />
                       <input type="number" autoComplete="off"
                          value={newsletter.phone}
                          placeholder="Contact Number"
                          onChange={handleInput}
                          name="phone" id="phone" />
                   </div>

                   <div>
                       <button type="submit">Submit</button>
                   </div>
               </Form>
                </div>
            </Container>
        </>
    )
}

export default ContactUs
