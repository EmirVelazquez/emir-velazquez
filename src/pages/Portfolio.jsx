import React, { Component } from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "reactstrap";
import "react-typist/dist/Typist.css";
import TopNav from "../components/TopNav";
import CityJumbotron from "../components/CityLandscape";
import Sidebar from "../components/Sidebar";
import Grid from "../components/Grid";
import AboutMe from "../components/AboutMe";
// import ScrollAnimation from "react-animate-on-scroll";
// import "../../node_modules/animate.css";

class Portfolio extends Component {

    state = {
        navOpen: false
    }

    componentDidMount = () => {
        // Create key value for local storage of default theme state
        // localStorage.setItem("pageTheme", "retroWave");
        console.log("Use to pull the theme save to local storage");
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
                <Container id="aboutContainer" fluid={true}>
                    <Row>
                        <Col sm={"12"}>
                            <AboutMe questionUser={this.props.userFirstName} />
                        </Col>
                    </Row>
                </Container>
                <Container id="portFolioContainer" fluid={true}>
                    <div>Portfolio</div>
                </Container>"
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