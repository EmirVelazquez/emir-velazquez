import React, { Component } from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "reactstrap";
import "react-typist/dist/Typist.css";
import TopNav from "../components/TopNav";
import CityJumbotron from "../components/CityLandscape";
import Sidebar from "../components/Sidebar";

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
                <Container id="portFolioContainer" fluid={true}>
                    <Row>
                        <Col sm={"12"}>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Portfolio;