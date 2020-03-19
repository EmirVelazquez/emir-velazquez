import React from "react";
import { Container, Row, Col, Card, CardText, CardTitle, CardImg, UncontrolledTooltip, Button } from "reactstrap";
import "./PortfolioCard.css";
import GitHubBlack from "../../assets/github/githubBlack.png";
import NewTab from "../..//assets/newTab.png";
// import { useSpring, animated } from 'react-spring'

const PortfolioCard = props => {
    return (
        <Col sm={"3"} className="cardColumn">
            <Card className="portfolioCardMain">
                <Container fluid={true} style={{ backgroundColor: `${props.projectColor}`, borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 0 }}>
                    <Row className="projectImageWrapper">
                        <Col sm="12" style={{ padding: 0 }}>
                            <CardImg src={props.projectImage} alt="Image of the Project" className="projectPng" />
                            <div style={{ position: "absolute", bottom: "-5%", right: 0, whiteSpace: "nowrap" }}>
                                <a href={props.projectLink} target="_blank" rel="noopener noreferrer" className="appAnchors" ><Button type="button" id={props.projectTitle} className="appBtns"><img src={NewTab} alt="Open in New Tab Logo" className="buttonPngs" /></Button></a>
                                <UncontrolledTooltip target={props.projectTitle} placement="bottom">Demo {props.projectTitle}</UncontrolledTooltip>
                                <a href={props.projectGithub} target="_blank" rel="noopener noreferrer" className="appAnchors" ><Button type="button" className="appBtns" id={props.projectTitle + props.projectKey}><img src={GitHubBlack} alt="GitHub Logo" className="buttonPngs" /></Button></a>
                                <UncontrolledTooltip target={props.projectTitle + props.projectKey} placement="bottom">GitHub Repo</UncontrolledTooltip>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} style={{ paddingLeft: "2.5%", paddingRight: "2.5%", paddingBottom: "2.5%" }}>
                    <Row>
                        <Col sm="12">
                            <CardTitle className="projectTitle">
                                {props.projectTitle}
                            </CardTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <CardText className="projectDescription">
                                {props.projectDescription}
                            </CardText>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Col >
    )
}

export default PortfolioCard;