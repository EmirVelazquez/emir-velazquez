import React from "react";
import "./TypistGreeting.css";
import Typist from "react-typist";

const TypistGreeting = props => {
    return (
        <React.Fragment>
            <div id="userGreetingContainer">
                <h1 className="userGrettingHeader">Hello {props.currentUserName},</h1>
                <Typist cursor={{ show: false }}>
                    <h1 className="userGrettingHeader">my name is <span className="emphasisText">Emir Velazquez</span></h1>
                </Typist>
            </div>
            <div id="typistGreetingContainer">
                <div>
                    <Typist cursor={{ show: false }} startDelay={2500}>
                        <h2 className="userGrettingHeader">I love to <span className="emphasisText">develop</span> and <span className="emphasisText">collaborate.</span></h2>
                        <Typist.Backspace count={34} delay={1000} />
                        <h2 className="userGrettingHeader">Applying <span className="emphasisText">Design Thinking</span> is what I <span className="emphasisText">strive</span> for.</h2>
                        <Typist.Backspace count={46} delay={1000} />
                        <h2 className="userGrettingHeader">Finding <span className="emphasisText">solutions</span> is my <span className="emphasisText">goal.</span></h2>
                        <Typist.Backspace count={29} delay={1000} />
                        <h2 className="userGrettingHeader">I'm ready, <span className="emphasisText">let's get it done.</span></h2>
                    </Typist>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TypistGreeting;