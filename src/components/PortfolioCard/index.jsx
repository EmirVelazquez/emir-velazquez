import React from "react";
import { Col, Card, CardText, CardBody, CardTitle, CardImg, CardSubtitle } from "reactstrap";
import "./PortfolioCard.css";
// import { useSpring, animated } from 'react-spring'

const PortfolioCard = props => {
    return (
        <Col sm={"6"} id="cardColumn">
            <Card style={{ backgroundColor: "#373737", height: "70vh", color: "#FFFFFF", borderRadius: 5 }}>
                <CardBody style={{ backgroundColor: `${props.projectColor}`, height: "60%", borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 0 }}>
                    <div className="projectImageWrapper">
                        <CardImg src={props.projectImage} alt="Image of the Project" className="projectPng" />
                    </div>
                </CardBody>
                <CardBody style={{ height: "40%", paddingLeft: "2.5%", paddingRight: "2.5%" }}>
                    <CardTitle className="projectTitle">{props.projectTitle}</CardTitle>
                    <CardText className="projectDescription">
                        {props.projectDescription}
                    </CardText>
                    <CardSubtitle className="projectTechnologies">Technologies</CardSubtitle>
                    <br></br>
                    <a href={props.projectGithub} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <br></br>
                    <a href={props.projectLink} target="_blank" rel="noopener noreferrer">Live App</a>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PortfolioCard;