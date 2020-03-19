import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Collab.css";
import ScrollAnimation from "react-animate-on-scroll";
import "../../../node_modules/animate.css";
import CollabCard from "../CollabCard";
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
                <Row>
                    <Col sm={"12"} style={{ padding: 0 }} >
                        <h1 id="collabHeader">Collab</h1>
                        <div className="sectionsSeparator"></div>
                    </Col>
                </Row>
                <ScrollAnimation
                    animateIn="fadeInRight"
                    animateOnce={true}
                >
                    <Row id="collabCardRow">
                        {this.state.cardCollab.map((collabCard, i) => (
                            <CollabCard
                                key={i}
                                collabId={"collab" + collabCard.id}
                                collabTitle={collabCard.title}
                                collabGithub={collabCard.github}
                                collabLink={collabCard.appLink}
                                collabImage={require("../../assets/collabPngs" + collabCard.appImage)}
                                collabColor={collabCard.backgroundColor}
                                collabDescription={collabCard.description}
                                collabTechnology={collabCard.technologies}
                            />
                        ))}
                    </Row>
                </ScrollAnimation>
            </Container>
        )
    }
}

export default CollabSection;