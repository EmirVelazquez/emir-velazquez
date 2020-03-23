import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import { Dropdown, DropdownToggle, DropdownMenu, Form, FormGroup, Input, FormFeedback } from "reactstrap";
import "./Sidebar.css";
import CloseMenu from "../../assets/closeMenu.png";

const Sidebar = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Menu
            width={200}
            isOpen={props.sideBarStatus}
            customBurgerIcon={false}
            customCrossIcon={false}
            disableAutoFocus
            disableOverlayClick
            disableCloseOnEsc>
            <button id="closeNavBtn" onClick={props.closeClicked}>
                <img src={CloseMenu} alt="Close Icon" style={{ width: 18, height: 18 }} />
            </button>
            <button className="sidebarButtons" id="personButton" onClick={props.scrollToAbout}>
                <div className="iconHolder" id="personHolder"></div>
                <p className="sidenavText">About</p>
            </button>
            <button className="sidebarButtons" id="portfolioButton" onClick={props.scrollToPortfolio}>
                <div className="iconHolder" id="portfolioHolder"></div>
                <p className="sidenavText">Portfolio</p>
            </button>
            <button className="sidebarButtons" id="teamButton" onClick={props.scrollToCollab}>
                <div className="iconHolder" id="teamHolder"></div>
                <p className="sidenavText">Collab</p>
            </button>
            <button className="sidebarButtons" id="contactButton" onClick={props.scrollToContact}>
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
            <Dropdown className="sidebarButtons" id="contactButton" isOpen={dropdownOpen} toggle={toggle} direction="down">
                <DropdownToggle caret id="changeNameBtn">
                    Change Name
                </DropdownToggle>
                <DropdownMenu id="changeNameWrapper">
                    <Form onKeyPress={e => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            props.enterNewName();
                            if (props.wasSuccess === "true") {
                                props.closeClicked();
                            }
                        }
                    }}>
                        <FormGroup>
                            <Input
                                type="text"
                                name="newName"
                                value={props.newNameVal}
                                onChange={props.changeNameBoxChange}
                                placeholder="New Name"
                                id="changeNameField"
                                invalid={props.notEmpty}
                                valid={props.wasSuccess}
                            />
                            <FormFeedback>Can't Be Empty</FormFeedback>
                            <FormFeedback valid>Success!</FormFeedback>
                        </FormGroup>
                    </Form>
                </DropdownMenu>
            </Dropdown>
        </Menu>
    )
}

export default Sidebar;