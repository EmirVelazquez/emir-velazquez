import React, { Component } from "react";
import "./Portfolio.css";
import "react-typist/dist/Typist.css";
import TopNav from "../components/TopNav";
import CityLandscape from "../components/CityLandscape";
import Sidebar from "../components/Sidebar";
import AboutMe from "../components/AboutMe";
import PorfolioSection from "../components/PortfolioSection";
import CollabSection from "../components/CollabSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

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

    handleScrollToAbout = () => {
        const aboutSection = document.querySelector("#aboutMeSection");
        aboutSection.scrollIntoView({ behavior: "smooth" })
        this.setState({ navOpen: false })
    }

    handleScrollToPort = () => {
        const portSection = document.querySelector("#portFolioSection");
        portSection.scrollIntoView({ behavior: "smooth" })
        this.setState({ navOpen: false })
    }

    handleScrollToCollab = () => {
        const collabSection = document.querySelector("#collabSection");
        collabSection.scrollIntoView({ behavior: "smooth" })
        this.setState({ navOpen: false })
    }

    handleScrollToContact = () => {
        const contactSection = document.querySelector("#contactSection");
        contactSection.scrollIntoView({ behavior: "smooth" })
        this.setState({ navOpen: false })
    }

    render() {
        return (
            <React.Fragment>
                <Sidebar
                    sideBarStatus={this.state.navOpen}
                    closeClicked={this.handleCloseMenu}
                    scrollToAbout={this.handleScrollToAbout}
                    scrollToPortfolio={this.handleScrollToPort}
                    scrollToCollab={this.handleScrollToCollab}
                    scrollToContact={this.handleScrollToContact}
                >
                </Sidebar>
                <TopNav navButtonClicked={this.handleNavButtonClicked}></TopNav>
                <div id="pageContainer">
                    <CityLandscape whichUser={this.props.userFirstName}></CityLandscape>
                    <AboutMe questionUser={this.props.userFirstName}></AboutMe>
                    <PorfolioSection></PorfolioSection>
                    <CollabSection></CollabSection>
                    <ContactSection userContact={this.props.userFirstName}></ContactSection>
                    <Footer />
                    <BackToTop numberOfPxToScroll="100" delayInMs="15" />
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio;