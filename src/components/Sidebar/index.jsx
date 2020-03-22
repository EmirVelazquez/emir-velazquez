import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import "./Sidebar.css";
import CloseMenu from "../../assets/closeMenu.png";

const Sidebar = props => {
    return (
        <Menu
            width={190}
            isOpen={props.sideBarStatus}
            customBurgerIcon={false}
            customCrossIcon={false}
            disableAutoFocus
            disableOverlayClick
            disableCloseOnEsc>
            <button id="closeNavBtn" onClick={props.closeClicked}>
                <img src={CloseMenu} alt="Close Icon" style={{ width: 18, height: 18 }} />
            </button>
            <button className="sidebarButtons" id="personButton">
                <div className="iconHolder" id="personHolder"></div>
                <p className="sidenavText">About</p>
            </button>
            <button className="sidebarButtons" id="portfolioButton">
                <div className="iconHolder" id="portfolioHolder"></div>
                <p className="sidenavText">Portfolio</p>
            </button>
            <button className="sidebarButtons" id="teamButton">
                <div className="iconHolder" id="teamHolder"></div>
                <p className="sidenavText">Collab</p>
            </button>
            <button className="sidebarButtons" id="contactButton">
                <div className="iconHolder" id="contactHolder"></div>
                <p className="sidenavText">Contact</p>
            </button>
            <div className="navSeparator"></div>
            <a href="https://github.com/EmirVelazquez" id="gitHubAnchor" className="socialLink" target="_blank" rel="noopener noreferrer" onClick={props.closeClicked}>
                <div className="iconHolder" id="gitHubHolder"></div>
                <p className="socialText">GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/emir-velazquez-35560b196/" id="linkedInAnchor" className="socialLink" target="_blank" rel="noopener noreferrer" onClick={props.closeClicked}>
                <div className="iconHolder" id="linkedInHolder"></div>
                <p className="socialText">LinkedIn</p>
            </a>
        </Menu>
    )
}

export default Sidebar;