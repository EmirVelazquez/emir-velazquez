import React from "react";
import "./AboutMe.css";

const AboutMe = props => {
    return (
        <div id="aboutMeHolder">
            <h1 id="aboutMeHeader">About Me</h1>
            <div id="separatorContainer">
                <div id="aboutSeparator"></div>
            </div>
            <div id="aboutMeTextContainer">
                <p className="aboutMeText">I am a <span className="emphasisText">Full Stack Web Developer</span> that believes in Design Thinking and a strong belief in being able to learn something from anyone.
                Most of my time is spent either working on a new project or learning new technology to further my skills.
                I also enjoy spending time with my spouse and dogs, reading a good book, or traveling around the world.
                </p>
                <p className="aboutMeText">Do you have any new ideas or projects you want help with, <span className="usersNameText">{props.questionUser}?</span></p>
                <p className="aboutMeText">Contact me and <span className="emphasisText">let's get it done.</span></p>
            </div>
        </div>
    )
}

export default AboutMe;