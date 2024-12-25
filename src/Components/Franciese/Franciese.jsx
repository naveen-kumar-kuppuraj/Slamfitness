import React from "react";
import { Container, Row, Col } from 'reactstrap';
import training from '..//Images/functional-training.webp';
import E from '../Rest API/Insertprocess';
import './Franciese.css';

import Footer from '../Footer/Footer';
function Home() {
    return (
        <>
            <Container className="our-Franchise">
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src={training} alt="training" className="img-fluid training" />
                    </Col>

                    <Col lg="6" md="6" sm="12" xs="12">
                        <h1 style={{ color: 'red' }}>Franciese Opportunity</h1>
                        <E />
                    </Col>


                </Row>
            </Container>
            <Footer />
        </>
    );
}
export default Home;