import React from "react";
import { Button, Navbar, NavbarBrand, NavItem } from "reactstrap";
import "./TopNav.css";
import EmirBrand from "../../assets/emirBrand.png";
import MenuBars from "../../assets/menuBars.png";

const TopNav = props => {
    return (
        <Navbar id="topNavContainer" sticky={"top"}>
            <NavbarBrand id="menuContainer">
                <Button id="navButton"
                    onClick={props.navButtonClicked}>
                    <img src={MenuBars} style={{ width: 29, height: 20 }} alt="Menu Bars"></img>
                </Button>
            </NavbarBrand>
            <NavItem id="logoContainer">
                <img src={EmirBrand} style={{ width: "100%", height: "100%" }} alt="Emir Brand Logo" />
            </NavItem>
        </Navbar>
    )
}

export default TopNav;
