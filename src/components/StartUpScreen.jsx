import React, { Component } from "react";

class startUpScreen extends Component {

    state = {
        weekDay: "",
        fullDate: "",
        actualTime: "00:00:00"
    }

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

        // If else to set the day as a 3 letter abvr
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

    render() {
        return (
            <div id="startScreen" className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div id="infoParagraph">
                            <p className="info">Current date is {this.state.weekDay} {this.state.fullDate}</p>
                            <p className="info">Current time is {this.state.actualTime}</p>
                            <p className="info">The Portfolio Website of Emir Velazquez</p>
                            <p className="info">Version 1.01 (C)Copyright ELV 1993-2020</p>
                        </div>

                        <div>
                            <p>>>Welcome User...</p>
                        </div>
                        <div>
                            <p id="cursorContainer">>>Enter your name: <input type="text" className="userNameContainer"></input>
                                <i></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default startUpScreen;