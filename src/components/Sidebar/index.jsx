import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import "./Sidebar.css";
import CloseMenu from "../../assets/closeMenu.png";
import Person from "../../assets/personIcon.png";
import Portfolio from "../../assets/portfolioIcon.png";
import Teams from "../../assets/teamIcon.png";
import Contact from "../../assets/contactIcon.png";
import GitHub from "../../assets/gitHub.png";
import LinkedIn from "../../assets/linkedIn.png";

const Sidebar = props => {
    return (
        <Menu
            width={200}
            isOpen={props.sideBarStatus}
            customBurgerIcon={false}
            customCrossIcon={false}
            disableAutoFocus
            disableOverlayClick>
            <button id="closeNavBtn" onClick={props.closeClicked}>
                <img src={CloseMenu} alt="Close Icon" style={{ width: 18, height: 18 }} />
            </button>
            <button className="sidebarButtons">
                <div className="iconHolder" id="personHolder"><img src={Person} alt="Person Icon" className="sideBarIcons" /></div>
                <p className="sidenavText">About</p>
            </button>
            <button className="sidebarButtons">
                <div className="iconHolder" id="portfolioHolder"><img src={Portfolio} alt="Folder Icon" className="sideBarIcons" /></div>
                <p className="sidenavText">Portfolio</p>
            </button>
            <button className="sidebarButtons">
                <div className="iconHolder" id="teamHolder"><img src={Teams} alt="Persons Icon" className="sideBarIcons" /></div>
                <p className="sidenavText">Collab</p>
            </button>
            <button className="sidebarButtons">
                <div className="iconHolder" id="contactHolder"><img src={Contact} alt="Contact Icon" className="sideBarIcons" /></div>
                <p className="sidenavText">Contact</p>
            </button>
            <div className="navSeparator"></div>
            <a href="https://github.com/EmirVelazquez" className="sidebarButtons socialLink" target="_blank" rel="noopener noreferrer" onClick={props.closeClicked}>
                <div className="iconHolder" id="gitHubHolder"><img src={GitHub} alt="GitHub Logo" className="sideBarIcons" /></div>
                <p className="sidenavText">GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/emir-velazquez-35560b196/" className="sidebarButtons socialLink" target="_blank" rel="noopener noreferrer" onClick={props.closeClicked}>
                <div className="iconHolder" id="linkedInHolder"><img src={LinkedIn} alt="Contact Icon" className="sideBarIcons" /></div>
                <p className="sidenavText">LinkedIn</p>
            </a>
        </Menu>
    )
}

export default Sidebar;