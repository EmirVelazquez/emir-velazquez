import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Collab.css";
import ScrollAnimation from "react-animate-on-scroll";
import "../../../node_modules/animate.css";
import PortfolioCard from "../PortfolioCard";
const CollabData = require("../../assets/collabAppData.json");

class CollabSection extends Component {
    state = {
        cardCollab: []
    }

    componentDidMount = () => {
        this.setState({ cardCollab: CollabData })
    }

    render() {
        return (
            <Container fluid={true} id="collabSection">
                <ScrollAnimation
                    animateIn="fadeInRight"
                    animateOnce={true}
                >
                    <Row>
                        <Col sm={"12"} style={{ padding: 0 }} >
                            <h1 id="collabHeader">Collab</h1>
                            <div className="sectionsSeparator"></div>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.cardCollab.map((card, i) => (
                            <PortfolioCard
                                key={i}
                                projectId={card.id}
                                projectTitle={card.title}
                                projectGithub={card.github}
                                projectLink={card.appLink}
                                projectImage={require("../../assets/projectPngs" + card.appImage)}
                                projectColor={card.backgroundColor}
                                projectDescription={card.description}
                                projectTechnology={card.technologies}
                            />
                        ))}
                    </Row>
                </ScrollAnimation>
            </Container>
        )
    }
}

export default CollabSection;