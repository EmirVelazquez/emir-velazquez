import React from "react";
import "./CityLandscape.css";
import CityandGrid from "../../assets/cityWithGrid.png";
import TypistGreeting from "../TypistGreeting";

const CityJumbotron = props => {
    return (
        <div id="cityLandscapeContainer">
            <img src={CityandGrid} style={{ width: "100%", height: "100%" }} alt="Future City Landscape"></img>
            <TypistGreeting currentUserName={props.whichUser}></TypistGreeting>
        </div>
    )
}

export default CityJumbotron;