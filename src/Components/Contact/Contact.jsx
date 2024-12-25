import React from "react";
import { Container, Col, Row, } from 'reactstrap';
import Footer from '../Footer/Footer';
import './Contact.css';
import Members from '../Rest API/Insertprocess';
import R from '../Rest API/Readprocess';

function Home() {
  return (
    <>
      <div className=" our-about">
        <h3 className=" text-center about-head">Contact Us</h3>
      </div>

      <Container >
        <Row className="con-row">
          <Col md="6" lg="6" sm="12" xs="12">
            <div>
              <h2>Get in Touch!</h2>
              <h5>Corporate Office</h5>
              <p>
                Address: #18/70, Halls Road, Kilpauk, Chennai - 600 010.
                <br />
                Phone: +91 7094 79145
                <br />
                Email: <a href="mailto:aneesh@paulsons.in">aneesh@paulsons.in</a>
              </p>
              <h5>Business Opportunities</h5>
              <p>
                Phone: +91 91768 40500
                <br />
                Phone: +91 99628 54265
                <br />
                Email: <a href="mailto:ceo@paulsons.in">ceo@paulsons.in</a>
              </p>
            </div>
          </Col>
          <Col md="6"lg="6" sm="12" xs="12">
            <h2 style={{color:'red'}}>Enquire Now</h2>
            <Members />
          </Col>
        </Row>
      </Container>
      <R />

      <Footer />
    </>
  );
}
export default Home;