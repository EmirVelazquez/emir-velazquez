import React from "react";
import { Container, Row, Col, Card, CardText, CardTitle, CardImg, CardSubtitle, UncontrolledTooltip } from "reactstrap";
import "./PortfolioCard.css";
import Tech from "../Tech";
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
                            <div style={{ position: "absolute", bottom: -35, right: "2.5%" }}>
                                <a href={props.projectLink} target="_blank" rel="noopener noreferrer" className="appAnchors" id={props.projectTitle}><img src={NewTab} alt="Open in New Tab Logo" className="gitHubRepo" /></a>
                                <UncontrolledTooltip target={props.projectTitle} placement="left">Demo {props.projectTitle}</UncontrolledTooltip>
                                <a href={props.projectGithub} target="_blank" rel="noopener noreferrer" className="appAnchors" id={props.projectTitle + props.projectKey}><img src={GitHubBlack} alt="GitHub Logo" className="gitHubRepo" /></a>
                                <UncontrolledTooltip target={props.projectTitle + props.projectKey} placement="left">GitHub Repo</UncontrolledTooltip>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} style={{ paddingLeft: "2.5%", paddingRight: "2.5%" }}>
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
                    <Row>
                        <Col sm="12" style={{ marginTop: "5%" }}>
                            <CardSubtitle className="projectTechnologies">Technologies</CardSubtitle>
                        </Col>
                    </Row>
                    <Row style={{ paddingRight: "2.5%", paddingLeft: "2.5%", marginBottom: "5%" }}>
                        {props.projectTechnology.map((technologyName, i) => (
                            <Tech
                                key={i}
                                whichTech={technologyName}
                            />
                        ))}
                    </Row>
                </Container>
            </Card>
        </Col >
    )
}

export default PortfolioCard;