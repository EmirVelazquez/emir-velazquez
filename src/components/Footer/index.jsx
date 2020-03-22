import React from "react";
import { Container, Row, Col } from "reactstrap";
import GitHubLogo from "../../assets/github/gitHub.png";
import LinkedInLogo from "../../assets/linkedin/linkedIn.png";
import ReactLogo from "../../assets/reactLogo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footerContainer">
            <Container fluid={true} style={{ padding: 0, margin: 0 }}>
                <Row>
                    <Col sm="12">
                        <div className="copyrightContainer">Any questions? Please <a href="mailto:emirleovelazquez@gmail.com" id="emailMe">email me.</a></div>
                        <div className="copyrightContainer">Copyright &copy; 2020 Emir Velazquez</div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <div className="socialFooterContainer">
                            <a id="gitHubFooter" href="https://github.com/EmirVelazquez" target="_blank" rel="noopener noreferrer"><img src={GitHubLogo} alt="GitHub Logo" style={{ width: "80%", height: "80%" }} /></a>
                            <a id="linkedInFooter" href="https://www.linkedin.com/in/emir-velazquez-35560b196/" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} alt="GitHub Logo" style={{ width: "80%", height: "80%" }} /></a>
                            <div style={{ display: "inline-block", float: "right", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                                <p style={{ display: "inline-block" }}>Built With React</p>
                                <div id="reactFooter">
                                    <img src={ReactLogo} alt="React Logo" style={{ width: "100%", height: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;