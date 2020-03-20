import React, { Component } from "react";
import "./Portfolio.css";
import { Container } from "reactstrap";
import "react-typist/dist/Typist.css";
import TopNav from "../components/TopNav";
import CityLandscape from "../components/CityLandscape";
import Sidebar from "../components/Sidebar";
import AboutMe from "../components/AboutMe";
import PorfolioSection from "../components/PortfolioSection";
import CollabSection from "../components/CollabSection";
import ContactSection from "../components/ContactSection";

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
                <CityLandscape whichUser={this.props.userFirstName}></CityLandscape>
                <AboutMe questionUser={this.props.userFirstName} />
                <PorfolioSection />
                <CollabSection />
                <ContactSection userContact={this.props.userFirstName} />
                <Container id="footerContainer" fluid={true}>
                    <footer >Footer</footer>
                </Container>
            </React.Fragment>
        )
    }
}

export default Portfolio;