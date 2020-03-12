import React from "react";
import "./TypistGreeting.css";
import Typist from "react-typist";

const TypistGreeting = props => {
    return (
        <React.Fragment>
            <div id="userGreetingContainer">
                <h1 className="userGrettingHeader">Hello {props.currentUserName},</h1>
                <Typist cursor={{ show: false }}>
                    <h1 className="userGrettingHeader">my name is Emir Velazquez</h1>
                </Typist>
            </div>
            <div id="typistGreetingContainer">
                <div>
                    <Typist cursor={{ show: false }} startDelay={2500}>
                        <h2 className="userGrettingHeader">I love to develop and collaborate.</h2>
                        <Typist.Backspace count={34} delay={1000} />
                        <h2 className="userGrettingHeader">Applying Design Thinking is what I strive for.</h2>
                        <Typist.Backspace count={46} delay={1000} />
                        <h2 className="userGrettingHeader">Finding solutions is my goal.</h2>
                        <Typist.Backspace count={29} delay={1000} />
                        <h2 className="userGrettingHeader">I'm ready, let's get it done.</h2>
                    </Typist>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TypistGreeting;