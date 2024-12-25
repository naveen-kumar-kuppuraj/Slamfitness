import React from "react";
import { Row, Container, Col } from "reactstrap";
import poster from '../Images/slam-ban1.webp';
import ban from '../Images/best-gym-in-chennai-1.jpg';
import g1 from '../Images/g1.jpg';
import g2 from '../Images/g1.jpg';
import g3 from '../Images/g12.jpg';
import g4 from '../Images/g2.jpg';
import g5 from '../Images/g3.jpg';
import g6 from '../Images/g4.jpg';
import g7 from '../Images/g6.jpg';
import g8 from '..//Images/g8.jpg';
import Feature from '../Featured/Featured';
import Footer from '../Footer/Footer';
import './Home.css';
function Home() {
    return (
        <>



            <img src={poster} class="d-block w-100 h-100" alt="banner" />


            <Container className="custom-slam">
                <Row>

                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src={ban} alt="poster" className="img-fluid poster" />
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <h2>
                            Welcome to <b class="slam">SLAM</b> Fitness Studio
                        </h2>
                        <p className="home-para">SLAM Fitness is not a gym; it is a way of life. It is widely recognised as a premium that
                            promotes a healthy lifestyle. It is one of the best fitness centers in Chennai, a preferred
                            destination for several top-notch training programs.
                            <strong> Our personalized designs will assist you in having the best time of your life. We
                                provide
                                various services such as functional training, fitness boot camp, body transformation, weight
                                loss, and weight gain.</strong>
                            The goal of this venture was to provide the best fitness experience possible under the
                            supervision of highly qualified and experienced professionals. SLAM Fitness Studio is growing
                            across the city, ensuring a luxurious fitness experience, making it the best weight loss gym in
                            Chennai.
                        </p>
                    </Col>
                </Row>

            </Container >
            <Container fluid >
                <Row>
                    <h2 className="text-center inside-head">Inside Our Gym</h2>
                    <Col md='3' lg="3" sm="12" xs="12">
                        <img src={g1} className="image-container" alt="g1" />
                    </Col>
                    <Col md='3'lg="3" sm="12" xs="12">
                        <img src={g2} className="image-container" alt="g2" />
                    </Col>
                    <Col md='3'lg="3" sm="12" xs="12">
                        <img src={g3} className="image-container" alt="g3" />
                    </Col>
                    <Col md='3'lg="3" sm="12" xs="12">
                        <img src={g4} className="image-container" alt="g4" />
                    </Col>
                    <Col md='3'lg="3" sm="12" xs="12">
                        <img src={g5} className="image-container" alt="g5" />
                    </Col>
                    <Col md='3'lg="3" sm="12" xs="12">
                        <img src={g6} className="image-container" alt="g6" />
                    </Col>
                    <Col md='3'lg="3" sm="12" xs="12">
                        <img src={g7} className="image-container" alt="g7" />
                    </Col>
                    <Col md='3'lg="3" sm="12" xs="12">
                        <img src={g8} className="image-container" alt="g8" />
                    </Col>
                </Row>
            </Container>
            <Feature />
            <Footer />
        </>
    );
}
export default Home;