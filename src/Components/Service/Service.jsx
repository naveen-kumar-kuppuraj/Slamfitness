import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import I from '../Rest API/Insertprocess';
import Footer from '../Footer/Footer';
import './Service.css';

function Home() {
    return (
        <>
            <img src="https://slamfitnessstudio.in/wp-content/uploads/2023/04/slam-ban2.webp" alt="service-poster" className="img-fluid sev-poster" />
            <h1 className="text-center" style={{ color: "red" }}>Functional Training</h1>
            <br></br>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12" className="col-ser">
                        <h2>
                            We Are Passionate About <b className="ser-title">Fitness</b>
                        </h2>
                        <p>

                            Building functional strength by emulating daily movements like <br></br>squatting, reaching, or even carrying a heavy object can help<br></br> improve your quality of life and reduce your risk of injury.
                            <br></br>

                            <p> We employ certified individuals or fitness trainers. As a friend, motivator, coach, a personal trainer, we offer encouragement and advice to keep you motivated throughout your fitness journey. So that you can achieve your goals as soon as possible, our staff will be happy to assist you with anything related to fitness.
                                <br></br>
                                Spending time on fitness is considered a luxury, as it is time spent on well-being.<br></br>
                                We provide the best functional fitness training in chennai , and join additional workouts that enhance your body strength.</p>

                        </p>

                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <iframe width="510" height="365" src="https://www.youtube.com/embed/QnyVSvdqRIk" title="SLAM Fitness CHETPET | Chennai&#39;s Finest GYM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </Col>
                </Row>
            </Container>
            <br></br>
            <h1 className="text-center" style={{ color: "red" }}>Fitness Bootcamp</h1>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="6" xs="6" className="col-ser">
                        <h2>

                            Our aim- make <b className="ser-title">10 x improvements </b>to your strength.

                        </h2>

                        <p> Improve your fitness to a whole new level.</p>
                        <p>Provide a stress-free fitness environment.</p>
                        <p>Provide a stress-free fitness environment.</p>
                        <p>Master live workouts and improve your energy levels.</p>
                        <p>Unlimited access to the best workouts with calorie tracking and personalized.</p>
                        <p>Access fitness regimes that help to reduce weight, build strength, and measure calories burnt with a customized diet plan for personal training programs by professionals.</p>
                        <p>Adapt to a healthy way of living with the help of our professionals</p>
                        <p>To improve your stamina to the next level</p>



                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <iframe width="510" height="365" src="https://www.youtube.com/embed/QnyVSvdqRIk" title="SLAM Fitness CHETPET | Chennai&#39;s Finest GYM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <h1 className="text-center" style={{ color: "red" }}>Body Transformation</h1>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="6" xs="6" className="col-ser">
                        <h2>

                            Let's kick start your <b className="ser-title">Workout.</b>

                        </h2>
                        <p>
                            Strip away the belly fat to make massive and applaudable results. Our diet plans and workout plans are designed to cater to your fitness requirements, which will help you push yourself from your comfort zones. Our workout fitness programs combine several fitness techniques for effective body sculpting healthily.
                        </p>
                        <p>
                            If adding lean muscle to your frame and changing your look without your top is your top health and fitness goal, you’ve come to the right place. This workout programme is designed to help you get big by increasing muscular size across all your major muscle groups and reducing body fat.
                        </p>

                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <iframe width="510" height="365" src="https://www.youtube.com/embed/QnyVSvdqRIk" title="SLAM Fitness CHETPET | Chennai&#39;s Finest GYM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </Col>
                </Row>
            </Container>
            <br>
            </br>
            <h1 style={{ color: "red" }}>Weight Loss Weight Gain</h1>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="6" xs="6" className="col-ser">
                        <h2>


                            How your <b className="ser-title">Weight Loss</b> Journey Starts?.

                        </h2>
                        <p>
                            Our customized diet plans for our clients are curated and developed, keeping their food nutrition intake and development in mind. People who overindulge in eating before or after workout sessions tend to be under a wrong perception or habit. However, it is vital to follow our diet plans, which are customised and personalized for you. Our trainers make you follow them to burn calories and train you under various fitness programs for effective weight loss and weight gain.
                        </p>
                        <p>
                            The two halves of the weight-maintenance equation are energy intake (eating and drinking) versus energy output (unintentional physical activity and exercise). As a result, exercise is an essential component of any weight loss programme.slam is known for the best gym in chennai for weight loss.
                        </p>

                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <iframe width="510" height="365" src="https://www.youtube.com/embed/QnyVSvdqRIk" title="Responsive iframe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  style={{position: "absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"}}></iframe>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Container fluid className="service-insert">
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <h1>Click to book an appointment today</h1>
                        <h2 style={{ color: "white" }}>Our team will reach out to you immediately.</h2>

                        <I />
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Footer />
        </>
    );
}
export default Home;