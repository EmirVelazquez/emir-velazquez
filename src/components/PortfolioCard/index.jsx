import React from "react";
import { Col, Card, CardText, CardBody, CardTitle, CardImg, CardSubtitle } from "reactstrap";
import "./PortfolioCard.css";
import Tech from "../Tech";
// import { useSpring, animated } from 'react-spring'

const PortfolioCard = props => {
    return (
        <Col sm={"3"} id="cardColumn">
            <Card style={{ backgroundColor: "#606060", height: "80vh", width: "100%", color: "#FFFFFF", borderRadius: 5 }}>
                <CardBody style={{ backgroundColor: `${props.projectColor}`, height: "50%", width: "100%", borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 0 }}>
                    <div className="projectImageWrapper">
                        <CardImg src={props.projectImage} alt="Image of the Project" className="projectPng" />
                    </div>
                </CardBody>
                <CardBody style={{ height: "50%", width: "100%", paddingLeft: "2.5%", paddingRight: "2.5%" }}>
                    <CardTitle className="projectTitle">{props.projectTitle}</CardTitle>
                    <CardText className="projectDescription">
                        {props.projectDescription}
                    </CardText>
                    <CardSubtitle className="projectTechnologies">Technologies</CardSubtitle>
                    <div className="techImgContainer">
                        {props.projectTechnology.map((technologyName, i) => (
                            <Tech
                                key={i}
                                whichTech={technologyName}
                            />
                        ))}
                    </div>
                    <CardSubtitle className="projectLinks">Links</CardSubtitle>
                    <CardText className="appLinkContainer">
                        <a href={props.projectGithub} target="_blank" rel="noopener noreferrer" className="appButtons">GitHub</a>
                        <a href={props.projectLink} target="_blank" rel="noopener noreferrer" className="appButtons">Visit App</a>
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PortfolioCard;