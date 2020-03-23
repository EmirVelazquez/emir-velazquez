import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./AboutMe.css";
import SelfPortrait from "../../assets/selfPortrait.png";
import ResumeDL from "../../assets/EmirResume.pdf";

const AboutMe = props => {
    return (
        <Container fluid={true} id="aboutMeSection">
            <Row>
                <Col sm={"12"} style={{ padding: 0 }} >
                    <h1 id="aboutMeHeader">About Me</h1>
                    <div className="sectionsSeparator"></div>
                </Col>
            </Row>
            <Row style={{ padding: 0, paddingLeft: "8%", paddingRight: "8%", marginTop: "1%" }}>
                <Col sm={"9"} style={{ padding: 0 }}>
                    <div id="aboutMeTextContainer">
                        <p className="aboutMeText">I am a <span className="emphasisText">Full Stack Web Developer</span> that strives to always build using <span className="emphasisText">Design Thinking.</span> I also have a personal belief that there is always something useful to learn from anyone. Most of my time is spent either working on a new project or learning a new technology to further my skills. You will also find me spending time with my spouse and dogs, reading a good book, or traveling around the world.</p>
                        <h2 id="skillsHeader">Skills</h2>
                        <ul className="aboutMeText" id="skillListContainer">
                            <li className="skillList aboutMeText">JavaScript</li>
                            <li className="skillList aboutMeText">React.js</li>
                            <li className="skillList aboutMeText">jQuery</li>
                            <li className="skillList aboutMeText">HTML</li>
                            <li className="skillList aboutMeText">CSS</li>
                            <li className="skillList aboutMeText">Bootstrap</li>
                            <li className="skillList aboutMeText">Node.js</li>
                            <li className="skillList aboutMeText">Express.js</li>
                            <li className="skillList aboutMeText">MySQL</li>
                            <li className="skillList aboutMeText">mongoDB</li>
                        </ul>
                        <p className="aboutMeText">plus more, I'm always learning new technologies. Visit my <a href="https://www.linkedin.com/in/emir-velazquez-35560b196/" target="_blank" rel="noopener noreferrer" className="paraGraphAnchor">LinkedIn</a>, <a href={ResumeDL} download className="paraGraphAnchor">download</a> my resume, or simply get in touch with me for more details. Do you have any new ideas or projects you want help with, <span className="usersNameText">{props.questionUser}?</span></p>
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