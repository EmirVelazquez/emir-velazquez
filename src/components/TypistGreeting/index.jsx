import React from "react";
import "./TypistGreeting.css";
import Typist from "react-typist";

const TypistGreeting = props => {
    return (
        <React.Fragment>
            <div id="userGreetingContainer">
                <h1 className="userGrettingHeader">Hi <span className="usersNameText">{props.currentUserName},</span></h1>
                <Typist cursor={{ show: false }}>
                    <h1 className="userGrettingHeader">I'm <span className="emphasisText">Emir Velazquez.</span></h1>
                </Typist>
            </div>
            <div id="typistGreetingContainer">
                <div>
                    <Typist cursor={{ show: false }} startDelay={2500}>
                        <h2 className="userGrettingHeader">I love to <span className="emphasisText">develop</span> and <span className="emphasisText">collaborate.</span></h2>
                        <Typist.Backspace count={34} delay={1000} />
                        <h2 className="userGrettingHeader"><span className="emphasisText">Let's get it done.</span></h2>
                    </Typist>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TypistGreeting;