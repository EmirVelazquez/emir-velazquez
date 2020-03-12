import React, { Component } from "react";
import { fallDown as Menu } from "react-burger-menu";
import "./Sidebar.css";
import CloseMenu from "../../assets/closeMenu.png";
import Person from "../../assets/personIcon.png";
import Portfolio from "../../assets/portfolioIcon.png";
import Teams from "../../assets/teamIcon.png";
import Contact from "../../assets/contactIcon.png";

class Sidebar extends Component {

    state = {
        showNav: this.props.sideBarStatus
    }

    handleStateChange = () => {
        this.setState({ showNav: this.state.isOpen });
    }

    render() {
        return (
            <Menu
                width={200}
                isOpen={this.props.sideBarStatus}
                onStateChange={() => this.handleStateChange()}
                customBurgerIcon={false}
                customCrossIcon={<img src={CloseMenu} alt="Close Icon" />}
                // customCrossIcon={false}
                disableAutoFocus>
                <button className="sidebarButtons"><div className="iconHolder" id="personHolder"><img src={Person} alt="Person Icon" className="sideBarIcons" /></div><p className="sidenavText">About</p></button>
                <button className="sidebarButtons"><div className="iconHolder" id="portfolioHolder"><img src={Portfolio} alt="Folder Icon" className="sideBarIcons" /></div><p className="sidenavText">Portfolio</p></button>
                <button className="sidebarButtons"><div className="iconHolder" id="teamHolder"><img src={Teams} alt="Persons Icon" className="sideBarIcons" /></div><p className="sidenavText">Collab</p></button>
                <button className="sidebarButtons"><div className="iconHolder" id="contactHolder"><img src={Contact} alt="Contact Icon" className="sideBarIcons" /></div><p className="sidenavText">Contact</p></button>
            </Menu>
        )
    }
}

export default Sidebar;