import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./AboutMe.css";
import SelfPortrait from "../../assets/selfPortrait.png";

const AboutMe = props => {
    return (
        <Container fluid={true} id="aboutMeSection">
            <Row>
                <Col sm={"12"} style={{ padding: 0 }} >
                    <h1 id="aboutMeHeader">About Me</h1>
                    <div className="sectionsSeparator"></div>
                </Col>
            </Row>
            <Row style={{ padding: 0, backgroundColor: "#121212", paddingLeft: "8%", paddingRight: "8%" }}>
                <Col sm={"9"} style={{ padding: 0 }}>
                    <div id="aboutMeTextContainer">
                        <p className="aboutMeText">I am a <span className="emphasisText">Full Stack Web Developer</span> that strives to always build using <span className="emphasisText">Design Thinking.</span> I also have a personal belief that there is always something useful to learn from anyone. Most of my time is spent either working on a new project or learning a new technology to further my skills. You will also find me spending time with my spouse and dogs, reading a good book, or traveling around the world.
                            </p>
                        <p className="aboutMeText">Do you have any new ideas or projects you want help with, <span className="usersNameText">{props.questionUser}?</span></p>
                        <p className="aboutMeText">Contact me and <span className="emphasisText">let's get it done.</span></p>
                    </div>
                </Col>
                <Col sm={"3"} style={{ padding: 0 }}>
                    <div id="portraitContainer">
                        <img src={SelfPortrait} alt="Portrait" id="selfPortrait"></img>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;