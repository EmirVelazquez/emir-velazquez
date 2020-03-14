import React, { Component } from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "reactstrap";
import "react-typist/dist/Typist.css";
import TopNav from "../components/TopNav";
import CityJumbotron from "../components/CityLandscape";
import Sidebar from "../components/Sidebar";
import Grid from "../components/Grid";

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
                <Container id="aboutContainer" fluid={true}>
                    <Row>
                        <Col sm={"12"}>
                            <h1 style={{ opacity: 1 }}>About Me</h1>
                            <p style={{ opacity: 1 }}>I'm a Full Stack Web Developer that believes in Design Thinking and has a humble belief that there is always something  new to learn from anyone. Most of my time is spent either working on a new project or learning a new technology to further my skills. I also enjoy spending time with my spouse and dogs, reading a good book, or traveling around the world.</p>
                            <p style={{ opacity: 1 }}>Do you have any new ideas or projects you want help with? Contact me and lets get it done!</p>
                        </Col>
                    </Row>
                </Container>
                <Container id="gridContainer" fluid={true}>
                    <Grid></Grid>
                </Container>
                <Container id="portFolioContainer" fluid={true}>
                    <div>Portfolio</div>
                </Container>"
                <Container id="footerContainer" fluid={true}>
                    <footer >Footer</footer>
                </Container>
            </React.Fragment>
        )
    }
}

export default Portfolio;