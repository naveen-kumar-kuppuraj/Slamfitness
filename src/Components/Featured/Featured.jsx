import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import back from '../Images/best-back-workouts-for-men-400x250.jpg';
import push from '../Images/Push-up-challenge-for-100-days-400x250.jpg';
import leg from '..//Images/what-happens-to-body-if-you-follow-30day-squat-challenge-400x250.jpg';
import './Featured.css';

function article() {
    return (
        <>
            <h2 className="text-center feature-head"> Featured Articles</h2>

            <Container className="custom-card">
                <Row>
                    <Col lg="4" md="4" sm="12" xs="12">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src={back}
                            />
                            <CardBody>
                                <CardTitle className="card-title" tag="h5">
                                    <strong> best back workout for men</strong>
                                </CardTitle>

                                <CardText>
                                    <h6 className="slamfit">by Slamfitness | Aug 21, 2024 | Workouts</h6>
                                    <p className="card-text">Introduction A strong, well-developed back is a cornerstone of any good
                                        physique. It not only looks impressive but also plays a vital role in posture, core
                                        stability, and overall athletic performance. Whether you're a seasoned gym rat or just
                                        starting your...</p>
                                </CardText>

                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4" md="4" sm="12" xs="12">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src={push}
                            />
                            <CardBody>
                                <CardTitle className="card-title" tag="h5">
                                    <strong>Push Up challenge for 100 days – Things that happen to your
                                        body</strong>
                                </CardTitle>

                                <CardText>
                                    <h6 className="slamfit">by Slamfitness | Aug 21, 2024 | Muscle Gain</h6>
                                    <p class="card-text">100 Push-Ups for 100 Days: The Ultimate Upper Body Odyssey The 100
                                        Push-Up
                                        Challenge: a test of will, a sculptor of muscle, and a potential recipe for disaster.
                                        This
                                        gruelling challenge promises dramatic results, but what happens to your body during
                                        those
                                        100 days of...</p>
                                </CardText>

                            </CardBody>
                        </Card>
                    </Col>


                    <Col lg="4" md="4" sm="12" xs="12">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src={leg}
                            />
                            <CardBody>
                                <CardTitle className="card-title" tag="h5">
                                    <strong>What Happens to Your Body if You Follow a 30-Day Squat
                                        Challenge</strong>
                                </CardTitle>

                                <CardText>
                                    <h6 className="slamfit">by Slamfitness | Aug 21, 2024 | Uncategorized</h6>
                                    <p class="card-text">Introduction Squats are the undisputed kings (and queens) of lower body
                                        exercises. But is a daily squat challenge for 30 days the magic bullet to sculpted legs
                                        and
                                        a superhero physique? Let's delve deeper and explore what you can expect from this
                                        fitness
                                        endeavor....</p>
                                </CardText>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>



        </>
    );
}
export default article;