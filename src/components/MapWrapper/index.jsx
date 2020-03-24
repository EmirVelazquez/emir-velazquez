import React, { Component } from "react";
import { Col } from "reactstrap";
import GoogleMapWithMarker from "../GoogleMapWithMarker";
import "./MapWrapper.css";
const mapKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

class MapWrapper extends Component {
    state = {
        infoboxMessage: "",
        isInfoboxVisible: false,
        markerLang: 0,
        markerLat: 0
    }

    handleMarkerClick = (message, lang, lat) => {
        this.setState({
            infoboxMessage: message,
            isInfoboxVisible: !this.state.isInfoboxVisible,
            markerLang: lang,
            markerLat: lat
        })
    }

    handleInfoboxClick = () => {
        this.setState({
            isInfoboxVisible: false
        })
    }

    render() {
        return (
            <Col sm="7" id="mapColumn">
                <GoogleMapWithMarker
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + mapKey}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    isInfoboxVisible={this.state.isInfoboxVisible}
                    infoboxMessage={this.state.infoboxMessage}
                    handleInfoboxClick={this.handleInfoboxClick}
                    handleMarkerClick={this.handleMarkerClick}
                    infoboxPosY={this.state.markerLang}
                    infoboxPosX={this.state.markerLat}
                />
            </Col>
        )
    }
}

export default MapWrapper;
