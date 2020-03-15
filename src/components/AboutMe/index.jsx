import React from "react";
import "./AboutMe.css";
import Triangle from "../../assets/trianglePoly.png";

const AboutMe = () => {
    return (
        <div id="aboutMeHolder">
            <div id="triangleContainer">
                <img src={Triangle} alt="Triangle Polygon" style={{ width: "100%", height: "100%" }} />
            </div>
            <div id="aboutInfoContainer">
                <h1 id="aboutMeHeader">About Me</h1>
                <p className="aboutMeText">I am a Full Stack Web Developer that believes in Design Thinking and has a humble belief in being able to learn something from anyone. Most of my time is spent either working on a new project or learning new technology to further my skills. I also enjoy spending time with my spouse and dogs, reading a good book, or traveling around the world.</p>
                <p className="aboutMeText">Do you have any new ideas or projects you want help with?</p>
                <p className="aboutMeText">Contact me and lets get it done!</p>
            </div>
        </div>
    )
}

export default AboutMe;