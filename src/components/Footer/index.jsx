import React from "react";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import GitHubLogo from "../../assets/github/gitHub.png";
import LinkedInLogo from "../../assets/linkedin/linkedIn.png";
import ReactLogo from "../../assets/reactLogo.png";
import FileLogo from "../../assets/fileCopy.png";
import ResumePDF from "../../assets/EmirResume.pdf";
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
                            <div className="footerBtnWrapper"><a className="footerAnchorIcons" href="https://github.com/EmirVelazquez" target="_blank" rel="noopener noreferrer"><img src={GitHubLogo} alt="GitHub Logo" style={{ width: "100%", height: "100%" }} /></a></div>
                            <div className="footerBtnWrapper"><a className="footerAnchorIcons" href="https://www.linkedin.com/in/emir-velazquez-35560b196/" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} alt="GitHub Logo" style={{ width: "100%", height: "100%" }} /></a></div>
                            <div className="footerBtnWrapper"><a className="footerAnchorIcons" id="resumeDownload" href={ResumePDF} download><img src={FileLogo} alt="File Copy Logo" style={{ width: "80%", height: "100%" }} /></a></div>
                            <UncontrolledTooltip target="resumeDownload" placement="right">Download Resume</UncontrolledTooltip>
                            <div style={{ display: "inline-block", float: "right", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                                <div style={{ display: "flex", alignItems: "center", height: 70 }}>
                                    <div className="builtWithCont">
                                        <div className="builtWithWrap"><p>Built With React</p></div></div>
                                    <div id="reactFooter">
                                        <div className="footerAnchorIcons"><img src={ReactLogo} alt="React Logo" id="reactLogoRotate" /></div>
                                    </div>
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