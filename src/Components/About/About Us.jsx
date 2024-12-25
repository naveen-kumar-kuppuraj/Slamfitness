import React from "react";
import { Container, Row, Col } from 'reactstrap';
import poster from '../Images/g4.jpg';
import './About.css';

import Footer from '../Footer/Footer';

function Home() {
    return (
        <>

            <Container fluid className="our-about">
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <h3 className="text-center about-head">About Us</h3>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <h4 className="our-story">Our Story</h4>
                        <p>Slam Fitness Studio aims to bring ‘next generation fitness’ with top-notch specialized workout
                            facilities and training programs for all members. Located in Kilpauk, our gym offers progressive
                            physical training and resistance formats. Our gym is known for possessing state-of-the-art
                            equipment and an expansive floor for a wide assortment of specialized training programs offered
                            by industry trainers and professionals.</p>
                        <p>SLAM, widely regarded as one of India’s premium fitness destinations, is more than just a gym;
                            it’s a way of life. The vision and mission of our venture are to provide the best fitness
                            experience possible under the supervision of highly qualified and experienced professionals. We
                            meet the demand for an upscale gym in the growing suburb of Kilpauk and surrounding areas.</p>
                        <p> Our strategic location means that it is easily accessible to the working population. Being one
                            of the best gyms in Chennai, aims to offer a plethora of services: Functional training, fitness
                            Bootcamp, body transformation, weight loss, and weight gain.</p>
                        <p>Our fitness team possesses exceptional talent, creativity, and genuine professionalism. Being the
                            best gym in Chennai, we have an experienced team with great rapport with our members,
                            prioritizes their needs, and is with them every step to reach their fitness goals.</p>
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src={poster} className="about-poster" alt="poster" />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
}
export default Home;