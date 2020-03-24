import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";
const styles = require("../../assets/mapTheme.json");
const mapMarker = require("../../assets/emirMarker.svg");

const GoogleMapWithMarker = withScriptjs(withGoogleMap(props => (
    <GoogleMap
        defaultZoom={5}
        defaultCenter={{
            lat: 32.776700,
            lng: -96.797000
        }}
        defaultOptions={{
            disableDefaultUI: true,
            draggable: true,
            keyboardShortcuts: false,
            scaleControl: true,
            scrollwheel: true,
            styles: styles
        }}
        onZoomChanged={() => props.handleInfoboxClick()}
        onDragStart={() => props.handleInfoboxClick()}
    >
        <Marker
            icon={{ url: mapMarker }}
            position={{
                lat: 32.776700,
                lng: -96.797000
            }}
            onClick={(message, lang, lat) => props.handleMarkerClick(
                "Currently based out of Dallas, Texas",
                32.776700,
                -96.797000
            )}
        />
        {props.isInfoboxVisible && (
            <InfoWindow position={{
                lat: props.infoboxPosY,
                lng: props.infoboxPosX
            }}
                onCloseClick={() => props.handleInfoboxClick()}
            >
                <div>
                    <h6 id="markerText">{props.infoboxMessage}</h6>
                </div>
            </InfoWindow>
        )}
    </GoogleMap>
)))

export default GoogleMapWithMarker;
