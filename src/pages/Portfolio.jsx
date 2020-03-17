import React, { Component } from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "reactstrap";
import "react-typist/dist/Typist.css";
import TopNav from "../components/TopNav";
import CityJumbotron from "../components/CityLandscape";
import Sidebar from "../components/Sidebar";
import Grid from "../components/Grid";
import AboutMe from "../components/AboutMe";
import PorfolioSection from "../components/PortfolioSection";

class Portfolio extends Component {

    state = {
        navOpen: false
    }

    componentDidMount = () => {
        console.log("Portfolio Page Mounted");
    }

    handleNavButtonClicked = () => {
        this.setState({ navOpen: true })
    }

    handleCloseMenu = () => {
        this.setState({ navOpen: false })
    }

    render() {
        return (
            <React.Fragment>
                <Sidebar sideBarStatus={this.state.navOpen} closeClicked={this.handleCloseMenu}></Sidebar>
                <TopNav navButtonClicked={this.handleNavButtonClicked}></TopNav>
                <CityJumbotron whichUser={this.props.userFirstName}></CityJumbotron>
                <Container id="gridContainer" fluid={true}>
                    <Grid></Grid>
                </Container>
                <Container id="lightCycleContainer" fluid={true}>
                    <Row>
                        <Col sm={"12"}>
                        </Col>
                    </Row>
                </Container>
                <AboutMe questionUser={this.props.userFirstName} />
                <PorfolioSection />
                <Container id="portFolioContainer" fluid={true}>
                    <div>Collab</div>
                </Container>"
                <Container id="portFolioContainer" fluid={true}>
                    <div>Contact</div>
                </Container>"
                <Container id="footerContainer" fluid={true}>
                    <footer >Footer</footer>
                </Container>
            </React.Fragment>
        )
    }
}

export default Portfolio;