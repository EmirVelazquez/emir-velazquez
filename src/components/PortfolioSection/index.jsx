import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./PortfolioSection.css";
import ScrollAnimation from "react-animate-on-scroll";
import "../../../node_modules/animate.css";
import PortfolioCard from "../PortfolioCard";
const AppData = require("../../assets/webAppData.json")


class PortfolioSection extends Component {
    state = {
        CardData: []
    }

    componentDidMount = () => {
        this.setState({ CardData: AppData })
        setTimeout(() => this.checkNewState(), 2000)
    }

    checkNewState = () => {
        console.log(this.state.CardData);
    }

    render() {
        return (
            <Container fluid={true} id="portFolioSection">
                <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOnce={true}
                >
                    <Row>
                        <Col sm={"12"} style={{ padding: 0 }} >
                            <h1 id="portFolioHeader">Portfolio</h1>
                            <div className="sectionsSeparator"></div>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.CardData.map((card, i) => (
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

export default PortfolioSection;