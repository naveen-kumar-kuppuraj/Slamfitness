import React from "react";
import { Container, Row, Col } from 'reactstrap';
import logo from '..//Images/download.png';
import './Footer.css';


function footer() {
    return (
        <>
            <footer className="bg-light text-dark pt-4">
                <Container fluid>
                    <Row>
                        <Col lg="3" md='3' sm="12" xs='12'>
                            <img src={logo} alt="logo" height="100px" width="180px" />
                            <p>Slam is one of the best fitness centers in Chennai. Our customized designs will help to enjoy
                                the best experience of your life.</p>
                            <h6>Follow Us</h6>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        </Col>
                        <Col lg="2" md="2" sm="12" xs="12">
                            <h6 class="text-uppercase">Quick Links</h6>
                            <ul class="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/About">About Us</a></li>
                                <li><a href="/Service">Service</a></li>
                                <li><a href="/Blogs">Blog</a></li>
                                <li><a href="/Franciese">Franchise Opportunity</a></li>
                                <li><a href="/Contact">Contact Us</a></li>
                            </ul>
                        </Col>
                        <Col lg="2" md='2' sm='12' xs="12">
                            <h6 class="text-uppercase">For More Info</h6>
                            <ul class="list-unstyled">
                                <li>Mr. Suresh Babu (Sr. Vice President)</li>
                                <li>P: +91 98414 63406</li>
                                <li>E: <a href="mailto:suresh@paulsons.in">suresh@paulsons.in</a></li>
                            </ul>
                        </Col>
                        <Col lg="2" md='2' sm='12' xs="12">
                            <h6 class="text-uppercase">Corporate Office</h6>
                            <ul class="list-unstyled">
                                <li>A: #187/70, Halls Road, Kilpauk, Chennai - 600 010.</li>
                                <li>P: +91 70944 79145</li>
                                <li>E: <a href="mailto:aneesh@paulsons.in">aneesh@paulsons.in</a></li>
                            </ul>
                        </Col>
                        <Col lg="2" md='2' sm='12' xs="12">
                            <h6 class="text-uppercase">Business Opportunities</h6>
                            <ul class="list-unstyled">
                                <li>P: +91 91768 40500</li>
                                <li>P: +91 98414 63406</li>
                                <li>P: +91 99628 54265</li>
                                <li>E: <a href="mailto:ceo@paulsons.in">ceo@paulsons.in</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>


        </>
    );
}
export default footer;