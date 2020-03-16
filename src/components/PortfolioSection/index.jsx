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
        setTimeout(() => this.checkState(), 3000)
    }

    checkState = () => {
        console.log(this.state.CardData[0].title);
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
                        <PortfolioCard />
                    </Row>
                </ScrollAnimation>
            </Container>
        )
    }
}

export default PortfolioSection;