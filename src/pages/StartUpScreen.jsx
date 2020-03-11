import React, { Component } from "react";
import "./StartUpScreen.css";
import { Container, Row, Col } from "reactstrap";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

class startUpScreen extends Component {
    // States Used
    state = {
        weekDay: "",
        fullDate: "",
        actualTime: "00:00:00",
        userName: "",
        whenReady: "",
        userEnterSubmit: "",
        disableInput: false,
        inputShow: false,
        userEnteredName: false
    }

    // Only After the component mounts, run the methods
    componentDidMount = () => {
        this.dayofWeek();
        setInterval(() => this.currentTime(), 1000);
    }

    // Method for getting the full date
    dayofWeek = () => {
        let date = new Date(); // Place current date inside let 
        let numDay = date.getDay(); // Get the weekday as num (0-6)
        let monthNum = date.getMonth() + 1; // Get the month as a num (0-11)
        let mDay = date.getDate(); // Get the month day as num (1-31)
        let curYear = date.getFullYear(); // Get the current year (yyyy)

        // Conditional to set the day as a 3 letter abvr
        if (numDay === 0) {
            this.setState({ weekDay: "Sun" });
        } else if (numDay === 1) {
            this.setState({ weekDay: "Mon" });
        } else if (numDay === 2) {
            this.setState({ weekDay: "Tue" });
        } else if (numDay === 3) {
            this.setState({ weekDay: "Wed" });
        } else if (numDay === 4) {
            this.setState({ weekDay: "Thur" });
        } else if (numDay === 5) {
            this.setState({ weekDay: "Fri" });
        } else {
            this.setState({ weekDay: "Sat" });
        }
        // Set the state for the full date
        this.setState({
            fullDate: monthNum.toString() + "-" + mDay.toString() + "-" + curYear.toString()
        });
    }
    // Method for getting the current time
    currentTime() {
        let date = new Date();
        let curHour = date.getHours(); // Get the current hour (0-23)
        let curMin = date.getMinutes(); // Get the current minutes (0-59)
        let curSec = date.getSeconds(); // Get the current seconds (0-59)
        this.setState({
            actualTime: curHour.toString() + ":" + curMin.toString() + ":" + curSec.toString()
        });
    }

    // Method to handle input box changes
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // Updating the input's state
        this.setState({
            [name]: value
        });
        // Conditional to check wether the value is empty or not
        if (value === "") {
            this.setState({ whenReady: "" })
            this.setState({ userEnterSubmit: "" })
        } else {
            this.setState({ whenReady: ">> Press Enter" });
        }
    };

    // Method to handle input submission
    handleKeyDown = event => {
        if (event.key === "Enter" && this.state.userName !== "") {
            // Grab user name trim it and make it all lowercase
            let lowerName = this.state.userName.trim().toLowerCase();
            // Capitalize only the first letter
            let upperName = lowerName.charAt(0).toUpperCase() + lowerName.substring(1);
            // Save user name to local storage
            localStorage.setItem("userName", upperName);
            // Set state for next typist message
            this.setState({
                disableInput: true,
                userEnterSubmit: ">> Thank You " + upperName,
                userEnteredName: true
            });
        }
    };

    // Method to handle input state
    changeInputShowState = () => {
        this.setState({ inputShow: true });
    }

    // Method to return the rendering of the input box
    renderInputBox = () => {
        if (this.state.inputShow) {
            return (
                <div id="inputContainer"><p id="arrows">>></p><input type="text"
                    value={this.state.userName}
                    name={"userName"}
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleKeyDown}
                    className="userNameContainer"
                    disabled={this.state.disableInput}
                    autoFocus>
                </input>
                </div>
            )
        }
        return null
    }

    // Method to handle the next typist message
    renderEnterLine = () => {
        if (this.state.whenReady !== "") {
            return (
                <Typist
                    cursor={{ show: false }}
                    avgTypingDelay={80}
                    onTypingDone={null}>
                    <p className="startScreenText">{this.state.whenReady}</p>
                </Typist>
            )
        }
        return null
    }

    // Method to handle the last typist message and send the user to portfolio
    renderLastLines = () => {
        if (this.state.userEnteredName) {
            return (
                <Typist
                    cursor={{ show: false }}
                    avgTypingDelay={80}
                    // Once last line is typed, route to portfolio page
                    onTypingDone={this.goToPortfolio}>
                    <p className="startScreenText">{this.state.userEnterSubmit}</p>
                    <p className="startScreenText">>> Personalizing Your Experience</p>
                    <p className="startScreenText">>> Have A Good Day</p>
                </Typist>
            )
        }
        return null
    }

    // Method that reloads the page to serve up portfolio
    goToPortfolio = () => {
        window.location.reload();
    }

    // Render method that returns the component
    render() {
        return (
            <Container id="startScreenContainer" fluid={true}>
                <Row>
                    <Col sm="12">
                        <div id="infoParagraph">
                            <p className="startScreenText">Current date is {this.state.weekDay} {this.state.fullDate}</p>
                            <p className="startScreenText">Current time is {this.state.actualTime}</p>
                            <p className="startScreenText">The Portfolio Website of Emir Velazquez</p>
                            <p className="startScreenText">Version 1.01 (C)Copyright ELV 2020</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Typist
                            cursor={{ show: false }}
                            avgTypingDelay={80}
                            onTypingDone={this.changeInputShowState}>
                            <p className="startScreenText">>> Welcome User</p>
                            <p className="startScreenText">A> Enter Your First Name:</p>
                        </Typist>
                        <div style={{ width: "30%" }}>
                            <this.renderInputBox />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <this.renderEnterLine />
                        <this.renderLastLines />
                    </Col>
                </Row>
            </Container >
        )
    }
};

// Export Component
export default startUpScreen;