import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./AboutMe.css";
import SelfPortrait from "../../assets/selfPortrait.png";
import ScrollAnimation from "react-animate-on-scroll";
import "../../../node_modules/animate.css";

const AboutMe = props => {
    return (
        <Container fluid={true} id="aboutMeHolder">
            <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
            >
                <Row>
                    <Col sm={12} style={{ padding: 0 }} >
                        <h1 id="aboutMeHeader">About Me</h1>
                        <div id="separatorContainer">
                            <div id="aboutSeparator"></div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ padding: 0, backgroundColor: "#121212" }}>
                    <Col sm={9} style={{ padding: 0 }}>
                        <div id="aboutMeTextContainer">
                            <p className="aboutMeText">I am a <span className="emphasisText">Full Stack Web Developer</span> that believes in Design Thinking and a strong belief in being able to learn something from anyone.
                        Most of my time is spent either working on a new project or learning new technology to further my skills.
                        I also enjoy spending time with my spouse and dogs, reading a good book, or traveling around the world.
                        </p>
                            <p className="aboutMeText">Do you have any new ideas or projects you want help with, <span className="usersNameText">{props.questionUser}?</span></p>
                            <p className="aboutMeText">Contact me and <span className="emphasisText">let's get it done.</span></p>
                        </div>
                    </Col>
                    <Col sm={3} style={{ padding: 0, display: "flex", justifyContent: "center" }}>
                        <div id="portraitContainer">
                            <img src={SelfPortrait} alt="Portrait" id="selfPortrait"></img>
                        </div>
                    </Col>
                </Row>
            </ScrollAnimation>
        </Container>
    )
}

export default AboutMe;