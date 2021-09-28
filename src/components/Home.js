import React from 'react'
import NavigationBar from './NavBar/NavigationBar'
import travel1 from '../Images/travel.jpg'
import { Container, Image, Row,Col, Card, Button, Footer } from 'react-bootstrap';
import './home.style.css'
import travel2 from '../Images/travel2.webp'

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <Container>
                <Image src={travel1} alt="travel" className="image-travel"/>
                <div className="content">
                    <h2>Welcome to Tour and travel Company</h2>
                    <p> “Once a year, go someplace you’ve never been before.”</p>
                </div>
            </Container>
            <Container className="cont-cont">
                <div className="about-cont">
                <div className="about">
                    <h2>
                        About
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                     magna aliqua. Tincidunt augue interdum velit euismod in pellentesque. Dictum non consectetur a erat nam at.
                      Eget velit aliquet sagittis id consectetur. Erat imperdiet sed euismod nisi porta lorem. Sed risus ultricies
                       tristique nulla aliquet enim tortor at. Nunc sed augue lacus viverra vitae congue eu. In pellentesque massa
                        placerat duis ultricies lacus. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Morbi leo
                         urna molestie at elementum eu.
                    </p>    
                    <br/>
                    <br/> 
                    <p>
                    Sagittis id consectetur purus ut. Non diam phasellus vestibulum lorem. Elementum eu facilisis sed odio morbi quis 
                    commodo. Odio aenean sed adipiscing diam donec adipiscing. Massa sapien faucibus et molestie ac feugiat sed lectus
                     vestibulum. Eget duis at tellus at urna condimentum mattis pellentesque. Penatibus et magnis dis parturient montes 
                     nascetur ridiculus. Condimentum id venenatis a condimentum vitae sapien pellentesque. Amet luctus venenatis lectus
                    magna fringilla urna. Elementum nibh tellus molestie nunc. Egestas maecenas pharetra convallis posuere morbi.
                    Tellus orci ac auctor augue mauris augue neque gravida in. Pellentesque nec nam aliquam sem et tortor consequat.
                    Etiam tempor orci eu lobortis elementum. Dignissim suspendisse in est ante in nibh mauris cursus. Dolor sit amet 
                    consectetur adipiscing elit. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Commodo nulla facilisi
                    nullam vehicula ipsum a arcu.
                    </p>
                    <br/>
                    <br />
                </div>
                </div>
            </Container>
            <Container className="w-100">
                <div className="ticket">
                    <h2>
                        Book A Ticket
                    </h2>
                    <br />
                    <Row xs={12} md={12} lg={12} className="flex-ticket">
                        <Col sm xs={6} md={4} className="flex1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top"  className="flex1-img"
                            src="https://media.istockphoto.com/photos/romantic-paris-with-tour-eiffel-picture-id155381519?b=1&k=20&m=155381519&s=170667a&w=0&h=EVepP_n0D5G34w28vw-hdI5Yzk-hJHy3tZBOHc-hWgg=" />
                            <br />
                            <Card.Body>
                                <Button className="flex1-btn">Book A Ticket</Button>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col sm xs={6} md={4} className="flex1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top"  className="flex1-img"
                            src="https://media.istockphoto.com/photos/shanghai-skyline-sunset-picture-id614703754?b=1&k=20&m=614703754&s=170667a&w=0&h=gw-W2TmmxKHpbzu7S_A7r4dngupsvEK5ll_kLPdzZAY=" />
                            <br />
                            <Card.Body>
                                <Button className="flex1-btn">Book A Ticket</Button>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col sm xs={6} md={4} className="flex1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top"  className="flex1-img"
                            src="https://media.istockphoto.com/photos/financial-district-of-london-picture-id488471764?b=1&k=20&m=488471764&s=170667a&w=0&h=h2zOIAfCteuWYnjsacK1Utasy0MmzQ-SL5InCey5PrI=" />
                            <br />
                            <Card.Body>
                                <Button className="flex1-btn">Book A Ticket</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container> 
            <br />
            <br />
            <br />
            <footer>
                <div>
                    <h2>Page created by - Anshika Sethiya</h2>
                </div>
            </footer>
         </div>   
    )
}

export default Home;
