import React from "react";
import "./CityLandscape.css";
import City from "../../assets/cityJumbotron.png";
import TypistGreeting from "../TypistGreeting";

const CityJumbotron = props => {
    return (
        <div id="cityLandscapeContainer">
            <img src={City} style={{ width: "100%", height: "100%" }} alt="Future City Landscape"></img>
            <TypistGreeting currentUserName={props.whichUser}></TypistGreeting>
        </div>
    )
}

export default CityJumbotron;