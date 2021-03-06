import React, { Component } from "react";
import { Container, Row, Col, Card, CardText, CardTitle, CardImg, UncontrolledTooltip } from "reactstrap";
import GitHubLogo from "../GitHubLogo";
import NewTabLogo from "../NewTabLogo";

class CollabCard extends Component {

    whichButtonsToMount = () => {
        if (this.props.collabLink === "") {
            return (
                <div className="linksMainContainer">
                    <div className="anchorWrapper"><a href={this.props.collabGithub} target="_blank" rel="noopener noreferrer" className="appAnchors" id={this.props.collabId + "key"}><GitHubLogo /></a></div>
                    <UncontrolledTooltip target={this.props.collabId + "key"} placement="bottom">GitHub Repo</UncontrolledTooltip>
                </div>
            )
        } else if (this.props.collabGithub === "") {
            return (
                <div className="linksMainContainer">
                    <div className="anchorWrapper"><a href={this.props.collabLink} target="_blank" rel="noopener noreferrer" className="appAnchors" id={this.props.collabId}><NewTabLogo /></a></div>
                    <UncontrolledTooltip target={this.props.collabId} placement="bottom">Read Article</UncontrolledTooltip>
                </div>
            )
        } else {
            return (
                <div className="linksMainContainer">
                    <div className="anchorWrapper"><a href={this.props.collabLink} target="_blank" rel="noopener noreferrer" className="appAnchors" id={this.props.collabId}><NewTabLogo /></a></div>
                    <UncontrolledTooltip target={this.props.collabId} placement="bottom">Demo {this.props.collabTitle}</UncontrolledTooltip>
                    <div className="anchorWrapper"><a href={this.props.collabGithub} target="_blank" rel="noopener noreferrer" className="appAnchors" id={this.props.collabId + "key"}><GitHubLogo /></a></div>
                    <UncontrolledTooltip target={this.props.collabId + "key"} placement="bottom">GitHub Repo</UncontrolledTooltip>
                </div>
            )
        }
    }

    render() {
        return (
            <Col sm={"3"} className="cardColumn">
                <Card className="portfolioCardMain">
                    <Container fluid={true} style={{ backgroundColor: `${this.props.collabColor}`, borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 0 }}>
                        <Row className="projectImageWrapper">
                            <Col sm="12" style={{ padding: 0 }}>
                                <CardImg src={this.props.collabImage} alt="Image of the Project" className="projectPng" />
                                <this.whichButtonsToMount />
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} style={{ paddingLeft: "2.5%", paddingRight: "2.5%", paddingBottom: "2.5%" }}>
                        <Row>
                            <Col sm="12">
                                <CardTitle className="projectTitle">
                                    {this.props.collabTitle}
                                </CardTitle>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                                <CardText className="projectDescription">
                                    {this.props.collabDescription}
                                </CardText>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </Col >
        )
    }
}

export default CollabCard;